<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="usa-grid-full">
      <div class="home-copy">
        <div class="usa-main-content">
          <!-- built files will be auto injected -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppNav from './components/Nav/Nav.vue'
  export default {
    name: 'app',
    components: {
      AppNav
    }
  }
</script>
