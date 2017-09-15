// @flow

import PouchDB from 'pouchdb'
import memoryAdapter from 'pouchdb-adapter-memory'

PouchDB.plugin(memoryAdapter)

type PouchRecord = {
  _id: string,
  _rev?: string,
  value: any
}

export default class Gun implements Storage {
  namespace: string
  data: any
  registry: Array<string> = []

  constructor(namespace: string = 'default') {
    this.namespace = namespace
    this.data = PouchDB(`sojourn.db.${namespace}`, {
      adapter: 'memory'
    })
  }

  async all(): Promise<Array<any>> {
    const { rows } = await this.data.allDocs({ include_docs: true })

    return rows.map(({ doc: { value } }) => value)
  }

  async get(key: string): Promise<any> {
    const record = await this.getRecord(key)
    return record ? record.value : undefined
  }

  async getRecord(key: string): Promise<any> {
    try {
      return await this.data.get(key)
    } catch (error) {
      return undefined
    }
  }

  async flush(): Promise<void> {
    this.data.destroy()
  }

  async put(key: string, value: any): Promise<void> {
    const original = await this.getRecord(key)
    const doc: PouchRecord = { _id: key, value }

    if (original) {
      doc._rev = original._rev
    }

    const record = await this.data.put(doc)

    return record.value
  }

  async remove(key: string): Promise<void> {
    const doc = await this.getRecord(key)

    doc ? this.data.remove(doc) : undefined
  }
}
