const SLIDE_SEPARATOR = '---'
const YAML_TOP_LEVEL_KEY_RE = /^[A-Za-z_][A-Za-z0-9_-]*\s*:/
const YAML_NESTED_KEY_RE = /^\s+[A-Za-z_][A-Za-z0-9_-]*\s*:/
const YAML_LIST_ITEM_RE = /^\s*-\s+/
const FRONTMATTER_NAME_RE = /^name\s*:\s*(.+?)\s*$/i

type HeadmatterSplit = {
  headmatterName: string | null
  body: string
}

type ConsumedFrontmatter = {
  nextIndex: number
  name: string | null
}

const parseFrontmatterName = (frontmatterLines: string[]): string | null => {
  for (const rawLine of frontmatterLines) {
    if (!rawLine || /^\s/.test(rawLine)) continue

    const stripped = rawLine.trim()
    if (!stripped || stripped.startsWith('#')) continue

    const match = stripped.match(FRONTMATTER_NAME_RE)
    if (!match) continue

    let value = match[1].trim()
    if (!value) return null

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1).trim()
    }

    return value || null
  }

  return null
}

export const sanitizeSlideName = (name: string): string => {
  const compact = name.trim().toLowerCase().replace(/\s+/g, '-')
  const normalized = compact.replace(/[^a-z0-9_-]+/g, '-').replace(/-{2,}/g, '-')
  return normalized.replace(/^[-_]+|[-_]+$/g, '')
}

const splitHeadmatter = (markdown: string): HeadmatterSplit => {
  const lines = markdown.split(/\r?\n/)
  if (!lines.length || lines[0].trim() !== SLIDE_SEPARATOR) {
    return { headmatterName: null, body: markdown }
  }

  for (let index = 1; index < lines.length; index += 1) {
    if (lines[index].trim() !== SLIDE_SEPARATOR) continue

    return {
      headmatterName: parseFrontmatterName(lines.slice(1, index)),
      body: lines.slice(index + 1).join('\n'),
    }
  }

  return { headmatterName: null, body: markdown }
}

const isYamlLikeFrontmatterLine = (line: string): boolean => {
  const stripped = line.trim()
  if (!stripped) return true
  if (stripped.startsWith('#')) return true
  if (YAML_TOP_LEVEL_KEY_RE.test(stripped)) return true
  if (YAML_NESTED_KEY_RE.test(line)) return true
  if (YAML_LIST_ITEM_RE.test(line)) return true
  return false
}

const consumeSlideFrontmatter = (lines: string[], startIdx: number): ConsumedFrontmatter => {
  let probeIdx = startIdx
  while (probeIdx < lines.length && !lines[probeIdx].trim()) {
    probeIdx += 1
  }

  if (probeIdx >= lines.length) {
    return { nextIndex: startIdx, name: null }
  }

  let closingIdx = probeIdx
  while (closingIdx < lines.length && lines[closingIdx].trim() !== SLIDE_SEPARATOR) {
    closingIdx += 1
  }

  if (closingIdx >= lines.length) {
    return { nextIndex: startIdx, name: null }
  }

  const frontmatterLines = lines.slice(probeIdx, closingIdx)
  if (!frontmatterLines.length) {
    return { nextIndex: startIdx, name: null }
  }

  let hasKey = false
  for (const rawLine of frontmatterLines) {
    if (!isYamlLikeFrontmatterLine(rawLine)) {
      return { nextIndex: startIdx, name: null }
    }
    if (YAML_TOP_LEVEL_KEY_RE.test(rawLine.trim()) || YAML_NESTED_KEY_RE.test(rawLine)) {
      hasKey = true
    }
  }

  if (!hasKey) {
    return { nextIndex: startIdx, name: null }
  }

  return {
    nextIndex: closingIdx + 1,
    name: parseFrontmatterName(frontmatterLines),
  }
}

export const buildSlideNameByNumberMap = (markdown: string): Map<string, string> => {
  const { headmatterName, body } = splitHeadmatter(markdown)
  const lines = body.split(/\r?\n/)
  const map = new Map<string, string>()

  let inFence = false
  let fenceMarker = ''
  let inHtmlComment = false
  let currentName = headmatterName
  let slideNumber = 0
  const current: string[] = []

  let index = 0
  while (index < lines.length) {
    const line = lines[index]
    const stripped = line.trim()

    // Slide separators can appear inside code fences or speaker notes.
    if (!inFence && line.includes('<!--')) {
      const startPos = line.indexOf('<!--')
      const endPos = line.indexOf('-->')
      if (endPos === -1 || startPos > endPos) {
        inHtmlComment = true
      }
    }
    if (inHtmlComment && line.includes('-->')) {
      inHtmlComment = false
    }

    if (stripped.startsWith('```')) {
      const marker = stripped.slice(0, 3)
      if (!inFence) {
        inFence = true
        fenceMarker = marker
      } else if (marker === fenceMarker) {
        inFence = false
        fenceMarker = ''
      }
    }

    if (stripped === SLIDE_SEPARATOR && !inFence && !inHtmlComment) {
      const slideContent = current.join('\n').trim()
      if (slideContent) {
        slideNumber += 1
        if (currentName) {
          const folderName = sanitizeSlideName(currentName)
          if (folderName) {
            map.set(String(slideNumber), folderName)
          }
        }
      }

      current.length = 0
      const consumedFrontmatter = consumeSlideFrontmatter(lines, index + 1)
      currentName = consumedFrontmatter.name
      index = consumedFrontmatter.nextIndex
      continue
    }

    current.push(line)
    index += 1
  }

  const tailContent = current.join('\n').trim()
  if (tailContent) {
    slideNumber += 1
    if (currentName) {
      const folderName = sanitizeSlideName(currentName)
      if (folderName) {
        map.set(String(slideNumber), folderName)
      }
    }
  }

  return map
}
