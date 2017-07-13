export function toCamelCase (str) {
  str = str.charAt(0).toLowerCase() + str.slice(1)
  return str.replace(/[-_](.)/g, (match, group) => {
    return group.toUpperCase()
  })
}

// just remove last -s
export function toSingularSimply (str) {
  return str.slice(0,-1)
}
