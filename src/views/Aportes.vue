<template>
    <div class="aportesbody">
    <Navbar></Navbar>
    <div class="titulo">
        <AportesBody></AportesBody>
    </div>

     <div class="footer">
       <Footer></Footer>
   </div>
    </div>
 
    
  
</template>

<script>
// @ is an alias to /src

import Navbar from'@/components/Navbar.vue';
import AportesBody from'@/components/AportesBody.vue';
import Footer from'@/components/Footer.vue';
import db from '@/firebase/init'
import firebase from 'firebase'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Aportes',
  components: {
    
    Navbar,
    AportesBody,
    Footer
  },
  methods:{
        ...mapActions(['getTareas'])
      },
      created(){
        this.getTareas()
      },
      computed: {
        ...mapState(['tareas'])
      },
};
</script>

<style scoped lang="scss">
  .titulo{
    padding-top: 3%;
  
  }
 .aportesbody{
 
   background-image: url(../assets/aportes.png);
   background-position: center;
   background-repeat: repeat;
   background-size:auto;
  .footer{
    margin-top: 40px;
  }
 }
</style>
