// @flow

export const Echo = '/echo'
export const echo = (payload: any): Action => ({
  type: Echo,
  payload
})

export const Empty = '/empty'
export const emptyAction = (): Action => ({ type: Empty })

export const HideOverlay = '/hide-overlay'
export const hideOverlay = (): Action => ({ type: HideOverlay })

export const ShowOverlay = '/show-overlay'
export const showOverlay = (): Action => ({ type: ShowOverlay })
