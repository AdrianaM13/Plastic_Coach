<template>
    <div class="loginbody">
    <Navbar></Navbar>
    <div class="titulo">
        <LoginBody></LoginBody>
    </div>

     <div class="footer">
       <Footer></Footer>
   </div>
    </div>
 
    
  
</template>

<script>
// @ is an alias to /src

import Navbar from'@/components/Navbar.vue';
import LoginBody from'@/components/LoginBody.vue';
import Footer from'@/components/Footer.vue';
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'elproblema',
  components: {
    
    Navbar,
    LoginBody,
    Footer

  },
};
</script>

<style scoped lang="scss">
  .titulo{
    padding-top: 3%;
  
  }
 .loginbody{
   background-color: RGB(204,22,27);
  .footer{
    margin-top: 40px;
  }
 }
</style>
