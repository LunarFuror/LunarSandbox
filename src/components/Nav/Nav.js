/**
 * Created by grayson on 9/14/17.
 */
import { isLoggedIn, login, logout } from '../../utils/auth.js'
export default {
  name: 'app-nav',
  methods: {
    handleLogin () {
      login()
    },
    handleLogout () {
      logout()
    },
    isLoggedIn () {
      return isLoggedIn()
    }
  }
}
