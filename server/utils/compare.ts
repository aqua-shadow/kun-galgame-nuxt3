export const compareStrings = (str1: string, str2: string) => {
  return str1
    .split('')
    .reduce((result: string[], char, index) => {
      if (char !== str2[index]) {
        result.push(`${char} => ${str2[index]}`)
      }
      return result
    }, [])
    .toString()
}

interface _DiffObject {
  [key: string]: any
}

export const compareObjects = (
  obj1: _DiffObject,
  obj2: _DiffObject
): _DiffObject => {
  const diff: _DiffObject = {}

  const traverse = (
    currentObj1: _DiffObject,
    currentObj2: _DiffObject,
    currentDiff: _DiffObject,
    path: string[] = []
  ) => {
    for (const key in currentObj1) {
      const newPath = [...path, key]

      if (!(key in currentObj2)) {
        currentDiff[key] = currentObj1[key]
      } else if (
        typeof currentObj1[key] === 'object' &&
        currentObj1[key] !== null &&
        typeof currentObj2[key] === 'object' &&
        currentObj2[key] !== null
      ) {
        currentDiff[key] = {}
        traverse(currentObj1[key], currentObj2[key], currentDiff[key], newPath)
        if (Object.keys(currentDiff[key]).length === 0) {
          delete currentDiff[key]
        }
      } else if (currentObj1[key] !== currentObj2[key]) {
        currentDiff[key] = currentObj1[key]
      }
    }
  }

  traverse(obj1, obj2, diff)
  return diff
}
