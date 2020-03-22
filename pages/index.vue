<template>
  <div class="container">
    <div>
      <h1 class="subtitle">
        KhAA©
      </h1>
      <h2 class="subtitle">
        Main page
      </h2>
      <div v-if="!$store.state.authUser" class="links">
        <nuxt-link to="/login" class="button--green">
          Log in / Sign Up
        </nuxt-link>
      </div>
      <div v-if="$store.state.authUser" class="links">
        <nuxt-link to="/profile" class="button--green">
          Profile
        </nuxt-link>
        <button @click="logout">Logout</button>        
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formError: null,
      formUsername: "",
      formPassword: ""
    };
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
      } catch (e) {
        this.formError = e.message;
      }
    }
  }
};
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
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
