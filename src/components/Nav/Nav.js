/**
 * Created by grayson on 9/14/17.
 */
import { isLoggedIn, login, logout, getUserInfo, getUserEmail, getUserNickname } from '../../utils/auth.js'
export default {
  name: 'app-nav',
  data: () => ({
    user: {},
    userName : '',
    userEmail : ''
  }),
  methods: {
    handleLogin () {
      login()
    },
    handleLogout () {
      if (confirm('Are you sure you want to log out?')) {
        logout()
      }
    },
    isLoggedIn () {
      return isLoggedIn()
    }
  },
  mounted () {
    if(isLoggedIn()){
      this.user = getUserInfo()
      this.userName = getUserNickname()
      this.userEmail = getUserEmail()
    }
  }
}
