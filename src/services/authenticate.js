import { isAuthenticated, login, logout } from '../../api/api'

const authService = {
  //verification on client side IS NOT good practice,
  //here must be request to the server

  isAuthenticated,
  login,
  logout
}
export default authService
