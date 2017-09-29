<template>
  <div class="usa-header">
    <div class="usa-grid-full">
        <div id="cssmenu">
          <!-- Once on a database this will be built programatically -->
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Hello">Hello World</a></li>
            <li><a href="/NameGenerator">Name Generator</a></li>
            <li v-if="isLoggedIn()"><a href="/HallOfHeroes">Hall Of Heroes</a></li>
            <li style="padding-top: 6px; padding-right:6px; float: right;">
              <button class="lf-btn-log" v-if="!isLoggedIn()" @click="handleLogin()">Log In</button>
              <span v-if="isLoggedIn()">Welcome: {{userName}}</span>
              <button class="lf-btn-log" v-if="isLoggedIn()" @click="handleLogout()">Log out </button>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script src="./Nav.js" type="text/javascript"></script>
