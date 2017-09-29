<template>
  <div>
    {{response}}
  </div>
</template>

<script>
  import { setIdToken, setAccessToken, hashUser } from '../utils/auth'

  export default {
    name: '',
    data: () => ({
      response: ''
    }),
    mounted () {
      this.$nextTick(() => {
        setAccessToken()
        setIdToken()
        hashUser()
      })
    }
  }
</script>
