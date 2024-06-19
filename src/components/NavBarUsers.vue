<template>
<nav class="navbar navbar-expand-lg p-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><i class="fa-solid fa-users-between-lines p-1"></i>Control de usuarios</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item mx-2">
          <router-link to="/"><i class="fa-solid fa-house-user p-1"></i>Home</router-link> 
        </li>
        <li class="nav-item mx-2">
          <router-link to="/private" v-if="user" ><i class="fa-solid fa-user-secret p-1"></i>Private</router-link>
        </li>
        <li class="nav-item mx-2">
          <router-link to="signUp" v-if="!user"><i class="fa-solid fa-user-plus p-1"></i>Sign Up</router-link>
        </li>
        <li class="nav-item mx-2">
          <router-link to="login"  v-if="!user"><i class="fa-solid fa-right-to-bracket p-1"></i>Login</router-link>
        </li>
        <li class="nav-item mx-2">
          <a href="" @click.prevent="logout" v-if="user" ><i class="fa-solid fa-right-from-bracket p-1"></i>Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
import { auth, signOut} from "../auth";
import {mapState} from "vuex";
export default{
    name: "NavBarUsers",
    data(){
      return{}
    },
    computed: {
      ...mapState(["user"])
    },
    methods: {
      async logout(){
        try {
          await signOut(auth);
          alert("Se ha cerrado la sesión");
          this.$router.push("/")

        } catch (error) {
          alert("No se ha cerrado la sesión con éxito")
        }
      }
    }
}

</script>

<style scoped lang="scss">
.navbar{
  background: linear-gradient(to right ,grey,silver);
}

</style>