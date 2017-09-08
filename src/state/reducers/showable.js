// @flow

const defaults: Showable = { show: false }

const showable = (hide: string, show: string) => (
  state: Showable = defaults,
  action: Action
): Showable => {
  switch (action.type) {
    case hide:
      return { ...state, show: false }
    case show:
      return { ...state, show: true }
    default:
      return { ...state }
  }
}

export default showable
