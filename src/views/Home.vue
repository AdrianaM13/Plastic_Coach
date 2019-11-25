<template>
    <div class="homebody">
    <Navbar></Navbar>
    <div class="titulo">
        <HomeTitulos></HomeTitulos>
    </div>

     <div class="footer">
       <Footer></Footer>
   </div>
    </div>
 
    
  
</template>

<script>
// @ is an alias to /src

import Navbar from'@/components/Navbar.vue';
import HomeTitulos from'@/components/HomeTitulos.vue';
import Footer from'@/components/Footer.vue';

export default {
  name: 'elproblema',
  components: {
    
    Navbar,
    HomeTitulos,
    Footer

  },
};
</script>

<style scoped lang="scss">
  
 .homebody{
   
   background-image: url(../assets/Tortuga.png);
   background-position: center;
   background-repeat: no-repeat;
   background-size:auto;
  .footer{
    margin-top: 40px;
  }
 }
</style>
