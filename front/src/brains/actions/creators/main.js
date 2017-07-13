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
      selected_component: component
    }
  }
}
