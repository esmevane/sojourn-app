
declare type Action = { +type: string }
declare type ModalState = { +show: boolean }
declare type DrawerState = { +show: boolean }
declare type MenuState = { +show: boolean }

declare type UiState = {
  +drawer: DrawerState,
  +menu: MenuState,
  +modal: ModalState,
}

declare type State = {
  +ui: UiState
}

declare type HasChildren = { children?: any }
