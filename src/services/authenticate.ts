import { isAuthenticated, login, logout } from '../../api/api'

/*
 * ATTENTION! This code is simulation of a real API calls
 * It is a mock implementation.  Verification on client side IS NOT good practice,
 * here must be request to the API server.
 */

const authService = {
  isAuthenticated,
  login,
  logout
}
export default authService
