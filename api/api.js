const admin = {
  username: 'darnahorna',
  password: 'qwerty'
}

export const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  if (token) {
    return true // User is authenticated
  } else {
    return false
  }
}

export const login = (username, password) => {
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
