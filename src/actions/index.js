// @flow

export const Empty: 'Empty' = 'Empty'
export const ShowDrawer: 'ShowDrawer' = 'ShowDrawer'
export const HideDrawer: 'HideDrawer' = 'HideDrawer'
export const ShowMenu: 'ShowMenu' = 'ShowMenu'
export const HideMenu: 'HideMenu' = 'HideMenu'
export const ShowModal: 'ShowModal' = 'ShowModal'
export const HideModal: 'HideModal' = 'HideModal'
export const UpdateEditor: 'UpdateEditor' = 'UpdateEditor'

export const emptyAction = (): Action => ({ type: Empty })
export const showDrawer = (): Action => ({ type: ShowDrawer })
export const hideDrawer = (): Action => ({ type: HideDrawer })
export const showMenu = (): Action => ({ type: ShowMenu })
export const hideMenu = (): Action => ({ type: HideMenu })
export const showModal = (): Action => ({ type: ShowModal })
export const hideModal = (): Action => ({ type: HideModal })

export const updateEditor = (editorState: EditorState): Action => (
  { type: UpdateEditor, payload: editorState }
)
