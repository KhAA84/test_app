<template>
  <div>
    <h1>Hello, {{$store.state.authUser.username}}</h1>
    <p>If you try to access this URL not connected, you will be redirected to LogIn/SignUp page.</p>
    <div class="links">
      <nuxt-link to="/" class="button--green">
        Back to the home page
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
