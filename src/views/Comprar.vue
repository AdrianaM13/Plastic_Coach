<template>
    <div class="problemabody">
    <Navbar></Navbar>
    <div class="titulo">
    <Comprartitulos></Comprartitulos>
    <div class="footer">
       <Footer></Footer>
   </div>
    </div>
    </div>
    
  
</template>

<script>
// @ is an alias to /src

import Navbar from'@/components/Navbar.vue';
import Comprartitulos from'@/components/Comprartitulos.vue';
import Footer from'@/components/Footer.vue';

export default {
  name: 'comprar',
  components: {
    
    Navbar,
   Comprartitulos,
   Footer
  },
};
</script>

<style scoped lang="scss">
  .titulo{
    padding-top: 3%;
 
  }
 .problemabody{
 
   background-image: url(../assets/Compras.jpg);
   background-position: center;
   background-repeat: repeat;
   background-size:auto;
 }
  .footer{
    margin-top: 40px;
  }
</style>
