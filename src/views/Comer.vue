<template>
     <div class="problemabody">
          <Navbar></Navbar>
          <div class="titulo">
          <Comertutulo></Comertutulo>
            <div class="footer">
       <Footer></Footer>
   </div>
        </div>
    </div>
    
  
</template>
  

<script>
// @ is an alias to /src

import Navbar from'@/components/Navbar.vue';
import Comertutulo from'@/components/Comertutulo.vue';
import Footer from'@/components/Footer.vue'; 
export default {
  name: 'comer',
  components: {
    Navbar, Comertutulo,
    Footer
  },
};
</script>

<style scoped lang="scss">
  .titulo{
    padding-top: 3%;
  }
 .problemabody{
  
   background-image: url(../assets/comer.jpg);
   background-position: center;
   background-repeat: repeat;
   background-size:auto;
 }
  .footer{
    margin-top: 40px;
  }
</style>
