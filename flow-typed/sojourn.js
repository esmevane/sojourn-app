import { AnimatedValue } from 'animated'

declare type Parse = string => string
declare type Content = string
declare type Id = string
declare type Title = string

declare interface Note { +id: Id, +title: Title, +content: Content }

declare type Action = { +type: string }
declare type Showable = { +show: boolean }
declare type ModalState = Showable
declare type DrawerState = Showable
declare type MenuState = Showable

declare type UiState = {
  +drawer: DrawerState,
  +menu: MenuState,
  +modal: ModalState,
}

declare type State = { +ui: UiState }
declare type HasAnimationState = { animate: AnimatedValue }
declare type HasAnimation = { animation?: Animation }
declare type HasContent = { content: Content }
declare type HasChildren = { children?: any }
declare type HasKey = { key: string }
declare type HasLocation = { location: History$Location }

declare type AnimationStart = 'AnimationStart'
declare type AnimationEnd = 'AnimationEnd'
declare type AnimationMessage = AnimationStart | AnimationEnd
declare type AnimationValue = AnimatedValue

declare interface Animator {
  spring(value: AnimatedValue, config: AnimationConfig): Animator,
  start(callback: ?Function): void
}

declare interface Storage {
  get(key: string): any,
  all(): Array<any>,
  put(key: Id, value: any): void,
  remove(key: string): void,
  flush(): void
}

declare type Stylesheet = { [string]: string }
