export default class Cache {
  constructor(public storage: Storage) {}

  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  get(key: string) {
    const val = this.storage.getItem(key)
    if (val) return JSON.parse(val)
  }

  remove(key: string) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }
}

const localCache = new Cache(localStorage)
const sessionCache = new Cache(sessionStorage)

export { localCache, sessionCache }
