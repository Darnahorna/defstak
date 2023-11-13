/*
 * ATTENTION! This code is simulation of a real API calls
 * It is a mock implementation.
 */

const admin = {
  username: 'testadmin',
  password: 'qwerty'
}

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token')
  if (token) {
    return true
  } else {
    return false
  }
}

export const login = (username: string, password: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === admin.username && password === admin.password) {
        localStorage.setItem('token', 'TEST_TOKEN')
        resolve(true)
      } else {
        resolve(false)
      }
    }, 500)
  })
}

export const logout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem('token')
      resolve(true)
    }, 500)
  })
}
