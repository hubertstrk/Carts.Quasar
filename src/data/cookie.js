import { Cookies } from 'quasar'

export const writeCookie = (name, value) => {
  Cookies.set(name, value, {
    expires: 365
  })
}

export const readCookie = (name) => {
  const all = Cookies.all()
  return all[name]
}
