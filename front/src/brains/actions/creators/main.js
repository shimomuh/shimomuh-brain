// base on flux-standard-action
// actions must be the following construction
// {
//   type: String,
//   payload: Hash or Error Object,
//   meta: Hash,
//   error: true or undefined or null
// }
export function selectComponent (component) {
  return {
    type: 'SELECT_COMPONENT',
    payload: {
      selectedComponent: component
    }
  }
}

export function hoverComponent (component) {
  return {
    type: 'HOVER_COMPONENT',
    payload: {
      hoveredComponent: component
    }
  }
}

export function didIntroAnimation () {
  return {
    type: 'DID_INTRO_ANIMATION'
  }
}

export function resize (size) {
  return {
    type: 'RESIZE',
    payload: {
      size: size
    }
  }
}
