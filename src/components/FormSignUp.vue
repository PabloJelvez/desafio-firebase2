<template>
<div class="formSignUp">
 
<form @submit.prevent="register" class="form">
    <div class="flex">
      <div class="login color">Sign Up</div>
      <label for="email" class="color">Email :</label>
      <input id="email" name="email" type="email" class="input" placeholder="Ingresa tu email" v-model="email" required >
      <label for="password" class="color">Password :</label>
      <input id="password" name="password" type="password" class="input" placeholder="Ingresa tu password" v-model="password" required >
      <label for="replyPassword" class="color">Password :</label>
      <input id="replyPassword" name="replyPassword" type="password" class="input" placeholder="Ingresa nuevamente tu password" v-model="replyPassword" required >  
      <button type="submit" :disabled="loadingSignUp" class="">Sign-up</button>
      <br>
    </div>
</form>

</div>

</template>

<script>

import {auth, createUserWithEmailAndPassword} from "../auth"

export default{
name: "FormSignUp",
data(){
    return{
        email: "",
        password: "",
        replyPassword: "",
        loadingSignUp: false
    }
},
methods: {
    async register(){
        try {
            if(!this.email, !this.password, !this.replyPassword){
                return alert("Debe ingresar todos los valores.") 
            }
            if(this.password != this.replyPassword){
                return alert("Los password deben coincidir, por favor verifique")
            }
            const userCredentials = await createUserWithEmailAndPassword(auth, this.email, this.password)
            console.log(userCredentials)
            alert("Usuario registrado con éxito")
            this.email = "",
            this.password = "",
            this.replyPassword = ""
            this.$router.push("/login")
        } catch (error) {
            alert("Ha ocurrido un error en el proceso de registro")
        }
    }
}

}

</script>

<style scoped lang="scss" >
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: linear-gradient(to right ,grey,silver);
  padding: 40px;
  border-radius: 10px;
}

.login {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.flex {
  display: flex;
  flex-direction: column;
}

.form button {
  margin-top: 25px;
  margin-bottom: 6px;
  border-radius: 10px;
  border: none;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 19px;
  font-weight: bold;
  color: grey;
}

.form label {
  margin-top: 20px;
  margin-bottom: 5px;
}

.form button:hover {
  box-shadow: 2px 2px 12px white;
}

.input {
  height: 30px;
  outline: none;
  padding: 15px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 15px;
  box-shadow: 2px 2px 12px inset black;
}

.span:hover {
  font-weight: bold;
}

.color {
  color: white;
}

.align {
  text-align: center;
}

</style>