declare type Stylesheet = { [string]: string }
declare type Action = { +type: string, +payload?: any }

declare type Showable = { +show: boolean }
declare type UiState = {
  +overlay: Showable
}

declare type State = { +ui: UiState }
