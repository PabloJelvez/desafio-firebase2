<template>
    <div class="formLogin">
     
    <form @submit.prevent="login" class="form">
        <div class="flex">
          <div class="login color">Login</div>
          <label for="email" class="color">Email :</label>
          <input id="email" name="email" type="email" class="input" placeholder="Ingresa tu email" v-model="email" required >
          <label for="password" class="color">Password :</label>
          <input id="password" name="password" type="password" class="input" placeholder="Ingresa tu password" v-model="password" required > 
          <button type="submit" class="" :disabled="loadingRegister" >Log-in</button>
          <br>
        </div>
    </form>
    
    </div>
    
    </template>
    
    <script>

    import { auth, signInWithEmailAndPassword } from "../auth"

    export default{
    name: "FormLogin",
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods: {
        async login(){
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password)
                alert("Inicio de sesión realizada con éxito");
                this.$router.push("/")
            } catch (error) {
                console.log(error)
                alert("Ha ocurrido un error, verifique sus credenciales")
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