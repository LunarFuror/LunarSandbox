<template>
  <div class="usa-header">
    <div class="usa-grid-full">
      <div class="usa-width-three-fourths">
        <div id="cssmenu">
          <!-- Once on a database this will be built programatically -->
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Hello">Hello World</a></li>
            <li><a href="/NameGenerator">Name Generator</a></li>
            <li v-if="isLoggedIn()"><a href="/HallOfHeroes">Hall Of Heroes</a></li>
          </ul>
        </div>
      </div>
      <div class="usa-width-one-fourth" style="padding-top: 5px;">
        <button class="lf-btn-log" v-if="!isLoggedIn()" @click="handleLogin()">Log In</button>
        <button class="lf-btn-log" v-if="isLoggedIn()" @click="handleLogout()">Log out </button>
      </div>
    </div>
  </div>
</template>

<script>
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
        if (confirm('Are you sure you want to log out?')) {
          logout()
        }
      },
      isLoggedIn () {
        return isLoggedIn()
      }
    }
  }
</script>
