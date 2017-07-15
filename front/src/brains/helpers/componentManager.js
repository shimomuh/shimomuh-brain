export function getComponentName (selectedComponent) {
  if (selectedComponent !== null) return selectedComponent
  const pathname = location.pathname
  if (pathname === '/') return ''
  return toSingularSimply(toCamelCase(pathname.slice(1)))
}
