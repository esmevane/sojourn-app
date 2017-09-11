// @flow

import GunDB from 'gun'

const filter = node => {
  const reducer = (nextNode, key) => {
    if (key === '_') return nextNode

    const value = Reflect.get(node, key)
    return value ? { ...nextNode, [key]: value } : nextNode
  }

  return Object.keys(node).reduce(reducer, {})
}

const db = GunDB()
const data = db.get('sojourn.memory')

export default class Gun implements Storage {
  namespace: string
  data: any
  registry: Array<string> = []

  constructor(namespace: string = 'default') {
    this.namespace = namespace
    this.data = data.get(this.namespace)
  }

  async all(): Promise<Array<any>> {
    return new Promise((resolve, reject) =>
      this.data.val(node => resolve(node))
    )
      .then(node => filter(node))
      .then(node =>
        Object.keys(node).map(key => Reflect.get(node, key))
      )
  }

  async get(key: string): Promise<any> {
    return new Promise((resolve, reject) =>
      this.data.get(key).val(node => resolve(node))
    )
  }

  async flush(): Promise<void> {
    this.data.put(null)
  }

  async put(key: string, value: any): Promise<void> {
    return new Promise((resolve, reject) => {
      this.data
        .get(key)
        .put(value, ack => (ack.err ? reject(ack) : resolve(ack)))
    })
  }

  async remove(key: string): Promise<void> {
    this.data.get(key).put(null)
  }
}
