<template>
    <div class="problemabody">
    <Navbar></Navbar>
    <div class="titulo">
        <Titulo></Titulo>
    </div>

     <div class="footer">
       <Footer></Footer>
   </div>
    </div>
 
    
  
</template>

<script>
// @ is an alias to /src

import Navbar from'@/components/Navbar.vue';
import Titulo from'@/components/Titulo.vue';
import Footer from'@/components/Footer.vue';

export default {
  name: 'elproblema',
  components: {
    
    Navbar,
    Titulo,
    Footer
  },
};
</script>

<style scoped lang="scss">
  .titulo{
    padding-top: 3%;
  
  }
 .problemabody{
   
   background-image: url(../assets/bgproblema.png);
   background-position: center;
   background-repeat: repeat;
   background-size:auto;
  .footer{
    margin-top: 40px;
  }
 }
</style>
