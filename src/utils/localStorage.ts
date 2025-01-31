export abstract class LocalStorage {
  static get = (key: string) => {
    if (localStorage !== undefined) {
      return localStorage.getItem(key)
    } else {
      return null
    }
  }

  static set = (key: string, value: string) => {
    if (localStorage != undefined) {
      localStorage.setItem(key, value)
    } else {
      console.error('Error setting item in Local Storage')
    }
  }
}
