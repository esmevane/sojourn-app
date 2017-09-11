// @flow

const memory: any = {}

export default class Memory implements Storage {
  async all(): Promise<Array<any>> {
    return Object.keys(memory).map(key => memory[key])
  }

  async get(key: string): Promise<any> {
    return memory[key]
  }

  async flush(): Promise<void> {
    Object.keys(memory).map(key => this.remove(key))
  }

  async put(key: string, value: any): Promise<void> {
    memory[key] = value
  }

  async remove(key: string): Promise<void> {
    delete memory[key]
  }
}
