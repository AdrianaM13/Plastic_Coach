<template>
    <div class="problemabody">
    <Navbar></Navbar>
    <div class="titulo">
    <Desechar1></Desechar1>
     <div class="footer">
       <Footer></Footer>
   </div>
    </div>
    </div>
    
  
</template>

<script>
// @ is an alias to /src

import Navbar from'@/components/Navbar.vue';
import Desechar1 from'@/components/Desechar1.vue';
import Footer from'@/components/Footer.vue';

export default {
  name: 'desechar',
  components: {
    
    Navbar,
   Desechar1,
   Footer
  },
};
</script>

<style scoped lang="scss">
  .titulo{
    padding-top: 3%;
   
  }
 .problemabody{
   
   background-image: url(../assets/desechar.jpg);
   background-position: center;
   background-repeat: repeat;
   background-size:auto;
 }
  .footer{
    margin-top: 40px;
  }
</style>
