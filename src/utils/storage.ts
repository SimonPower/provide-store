export const session = {
  set(key: string, value: unknown): void {
    sessionStorage.setItem(key, JSON.stringify(value))
  },
  get(key: string): any {
    try {
      const value = sessionStorage.getItem(key)
      if (value === null || value === undefined || value === '') {
        return null
      }
      return JSON.parse(value)
    } catch (err) {
      return null
    }
  },
  remove(key: string): void {
    sessionStorage.removeItem(key)
  }
}
