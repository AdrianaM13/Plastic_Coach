<template>

<div class="container">

     <h2> Mis Aportes</h2>

    <model-gltf  src="static/models/gltf/Duck/glTF/tree.glb"></model-gltf>

    
<h1>Agrega tu Aporte</h1>

<div>

    
    <form @submit.prevent="agregarTarea(nombre)" id="input-group-2" label="Tu Aporte:" label-for="input-2"   >
        <b-form-input
          id="input-2"
          v-model="nombre"
          required
          placeholder="Ingresa tu aporte"
        ></b-form-input>
      </b-form-group>

     <!-- <b-form-group id="input-group-3" label="En donde deseas realizarlo:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>-->

      <b-button type="submit" variant="primary">Enviar</b-button>
      
    </form>
    <b-card class="mt-3" header="Mira los aportes">
    <ul>
    <li v-for="item of tareas" :key="item.id">
    <!--{{item.id}}- -->{{item.nombre}}
    <b-button @click="eliminarTarea(item.id)"  variant="danger">Borrar</b-button>
  
    </li>
    </ul>
      
    </b-card>
  </div>
  
</div>


</template>



<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import {mapActions, mapState} from 'vuex'
    import { ModelGltf } from 'vue-3d-model'

    export default {
      name: 'Aportes',
      data() {
      return {
        nombre: ''
        
      }
    },
        components: {
            ModelGltf
        },
         methods: {    
            ...mapActions(['getTareas','agregarTarea','eliminarTarea']),
            
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
       
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false,
        this.$nextTick(() => {
          this.show = true
        })
      }    
    },
      created(){
        this.getTareas()
      },
      computed: {
        ...mapState(['tareas'])
      },
    }
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css?family=Handlee&display=swap"');

h1 {
  font-size: calc(9px + 9vh);
  line-height: calc(20px + 20vh);
/*   text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
    0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092;
  color: #fccaff; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  font-family: "handlee", cursive;
  text-align: center;
  animation: blink 12s infinite;
  -webkit-animation: blink 12s infinite;
}

body {
  padding: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #222;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 7px,
    rgba(0, 0, 0, 0.8) 9px,
    rgba(0, 0, 0, 0.8) 13px,
    transparent 13px
  );
}

@-webkit-keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
/*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

@keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
/*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

h2{
  font-size: 5em;
  font-family: 'Pacifico', cursive; 
  color:black; 
  margin-bottom:35px;
  }
  p{
    font-size: 2em;
  font-family: 'Pacifico', cursive; 
  color:black; 
  
  }

</style>


