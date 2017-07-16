import { findDOMNode } from 'react-dom'

export const brainRootDOM = document.getElementById('brain-app')

export const brainDataset = brainRootDOM ? brainRootDOM.dataset : false

export function getBoundingClientRect (ctx) {
  const dom = findDOMNode(ctx)
  if (!dom) return undefined
  return dom.getBoundingClientRect()
}
