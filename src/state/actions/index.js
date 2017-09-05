// @flow

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
export const insertPage = (page: Note): Action => ({
  type: InsertPage,
  payload: page
})

export const RemovePage = 'RemovePage'
export const removePage = (slug: Slug): Action => ({
  type: RemovePage,
  payload: slug
})
