<template>
    <div class="signbody">
    <Navbar></Navbar>
    <div class="titulo">
        <SignBody></SignBody>
    </div>
     <div class="footer">
       <Footer></Footer>
   </div>
    </div>
 
    
  
</template>

<script>
// @ is an alias to /src

import Navbar from'@/components/Navbar.vue';
import SignBody from'@/components/SignBody.vue';
import Footer from'@/components/Footer.vue';
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'elproblema',
  components: {
    
    Navbar,
    SignBody,
    Footer

  },
};
</script>

<style scoped lang="scss">
  .titulo{
    padding-top: 3%;
  
  }
 .signbody{
   background-color: RGB(255,92,66);
  .footer{
    margin-top: 40px;
  }
 }
</style>
