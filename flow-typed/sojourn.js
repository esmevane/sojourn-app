declare type Parse = string => string
declare type Content = string
declare type Id = string
declare type Title = string

declare interface Note { +id: Id, +title: Title, +content: Content }

declare type Action = { +type: string }
declare type ModalState = { +show: boolean }
declare type DrawerState = { +show: boolean }
declare type MenuState = { +show: boolean }

declare type UiState = {
  +drawer: DrawerState,
  +menu: MenuState,
  +modal: ModalState,
}

declare type State = { +ui: UiState }
declare type HasChildren = { children?: any }

declare interface Storage {
  get(key: string): any,
  all(): Array<any>,
  put(key: Id, value: any): void,
  remove(key: string): void,
  flush(): void
}
