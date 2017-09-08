// @flow

class Notes {
  client: any

  constructor(client: any) {
    this.client = client
  }

  async fetch() {
    return this.client.fetch()
  }
}

export default Notes
