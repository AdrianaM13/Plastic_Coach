<template>
<div>
 
  <div class="container ">
     <div class="d-flex justify-content-end ">
       <div class="xs-row-12 justify-content-end d-xs-none d-none d-lg-block">
         <div class="bounce">
          <img src="../assets/flecha.png" alt="flecha1"><br>
          <sam>¡Regístrate y comienza a<br>aportarle al mundo!</sam>
          </div>
       </div>
    </div>
     <div class="d-none d-lg-block ">
        <p class="titulo" >¡Infórmate más y ayuda más, el mundo y el océano te necesitan!</p>
        <p class="subtitulo">¡Visita cada una de nuestras secciones y aprénde cómo!</p>
     </div>
     <div class="small xs-row-12 d-lg-none " id="small">
        <p class="titulo1" >¡Infórmate más y ayuda más, el mundo y el océano te necesitan!</p>
        <p class="subtitulo1">¡Visita cada una de nuestras secciones y aprénde cómo!</p>
    </div>

  </div>  
</div>
</template>

<script>
export default {
    
}

</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');

.titulo{
 
  font-size: 90px;
  font-family: 'Pacifico', cursive; 
  color:white; 
  }
  .subtitulo{
  font-size: 45px;
  font-family: 'Pacifico', cursive; 
  color:white;    
  }
  #small{
    font-size: 55px;
  }
  p{
  font-size: 40px;
  font-family: 'Pacifico', cursive; 
  color:white;     
  }
  sam{
     font-size: 25px;
  font-family: 'Pacifico', cursive; 
  color:white; 
  }
 
  .bounce {

      position:relative;
      -webkit-animation:bounce 0.75s infinite;
    }
    
    @-webkit-keyframes bounce {
      0%       { bottom:1px; }
      25%, 75% { bottom:15px; }
      50%      { bottom:20px; }
      100%     {bottom:0;}
    }


</style>
