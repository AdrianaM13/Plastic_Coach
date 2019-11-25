<template>
<div>
    <div class="container">
    <img src="../assets/LOGO PNG.png" class="img-fluid" alt="logo">
    <div class="col">
      <div class="col">
      <form action="#" @submit.prevent="login">

         
            <div class="form-group">
              <label for="exampleInputEmail1">Correo</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ej. u123456@gmail.com" v-model="email">
            
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Tu password." v-model="password">
            </div>
           
            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
      </form>
        </div>
      </div>
    </div>
    <br>
                <div class="alert alert-danger" role="alert" v-if="error">
                  {{error}}
                </div>
 
</div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

  export default {
    data(){
      return {
        email: '',
        password: ''
      }
    },
    name: 'Login',
    methods: {
      login(){
        this.error = ''
        if (this.email && this.password){
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user=> {
             this.$router.push({name: 'Home'})
            }).catch(err =>{
              this.error =err.message
            })
          //enviamos formulario

        }else{
          this.error = 'Todos los campos son requeridos.'
        }

      }
    }
  }


</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Handlee&display=swap');



  .container{
     font-size: 25px;
     font-family: 'Handlee', cursive;
  }
  .boton{
    padding: 40px;
  }

</style>
