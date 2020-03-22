<template>
  <div class="container">
    <div>
      <h1 v-if="error.statusCode === 404" class="subtitle">
        Page not found
      </h1>
      <h1 v-else class="subtitle">
        An error occurred
      </h1>
      <div class="links">
        <nuxt-link to="/" class="button--green">
          Home page
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['error']
  // layout: 'default' // you can set a custom layout for the error page
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
