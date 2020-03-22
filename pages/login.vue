<template>
  <div class="container">
    <h1 v-if="!$store.state.authUser">Please login or sign up to see your profile</h1>
    <h1 v-else> Logged in as {{$store.state.authUser.username}}</h1>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p v-if="formError" class="error">{{ formError }}</p>
      <!-- <p>
        <i>
          To login, use
          <b>demo</b> as username and
          <b>demo</b> as password.
        </i>
      </p> -->
      <p>
        Username:
        <input v-model="formUsername" type="text" name="username">
      </p>
      <p>
        Password: 
        <input v-model="formPassword" type="password" name="password">
      </p>
      <button type="submit" class="button--green">LogIn/SignUp </button>
    </form>
    <div v-else>
      <button @click="logout" class="button--grey">LogOut</button>
    </div>
    <p v-if="$store.state.authUser">
      <NuxtLink to="/profile" class="button--green">Profile</NuxtLink>
    </p>
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
    async login() {
      try {
        await this.$store.dispatch("login", {
          username: this.formUsername,
          password: this.formPassword
        });
        this.formUsername = "";
        this.formPassword = "";
        this.formError = null;
      } catch (e) {
        this.formError = e.message;
      }
    },
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
.error {
  color: red;
}
</style>
