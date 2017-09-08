// @flow

const memory: any = {}

export default class Memory implements Storage {
  all(): Array<any> {
    return Object.keys(memory).map(key => memory[key])
  }

  get(key: string): any {
    return memory[key]
  }

  flush(): void {
    Object.keys(memory).map(key => this.remove(key))
  }

  put(key: string, value: any): void {
    memory[key] = value
  }

  remove(key: string): void {
    delete memory[key]
  }
}
