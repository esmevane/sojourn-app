// @flow

export const Echo: 'Echo' = 'Echo'
export const echo = (payload: any): Action => ({
  type: Echo,
  payload
})

export const Empty: 'Empty' = 'Empty'
export const emptyAction = (): Action => ({ type: Empty })

export const HideDrawer = 'HideDrawer'
export const HideMenu = 'HideMenu'
export const HideModal = 'HideModal'
export const hideDrawer = (): Action => ({ type: HideDrawer })
export const hideMenu = (): Action => ({ type: HideMenu })
export const hideModal = (): Action => ({ type: HideModal })

export const ShowDrawer = 'ShowDrawer'
export const ShowMenu = 'ShowMenu'
export const ShowModal = 'ShowModal'
export const showDrawer = (): Action => ({ type: ShowDrawer })
export const showMenu = (): Action => ({ type: ShowMenu })
export const showModal = (): Action => ({ type: ShowModal })

export const InsertPage = 'InsertPage'
export const insertPage = (payload: Note): Action => ({
  type: InsertPage,
  payload
})

export const RemovePage = 'RemovePage'
export const removePage = (payload: Slug): Action => ({
  type: RemovePage,
  payload
})

export const RequestPage = 'RequestPage'
export const requestPage = (payload: Id): Action => ({
  type: RequestPage,
  payload
})

export const RequestPageSuccess = 'RequestPageSuccess'
export const requestPageSuccess = (payload: Id): Action => ({
  type: RequestPageSuccess,
  payload
})

export const RequestPageFailure = 'RequestPageFailure'
export const requestPageFailure = (
  payload: RequestPageError
): Action => ({
  type: RequestPageFailure,
  payload
})
