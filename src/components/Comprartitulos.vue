<template>
<div>
    <h2> A la hora de Comprar</h2>
   
    <b-card no-body class="overflow-hidden fondo container" style="max-width: 70%;">
 <b-row no-gutters>
      <b-col md="8" style="text-align:left">
            <b-card-body title=""> 
            <h3>Consejos a la hora de comprar </h3>
<br>
<h1>- Lleva tus propias bolsas al supermercado    <br><br>
-Compra tus productos a granel.<br><br>
-Consume alimentos de temporada.<br><br>
-Consumir productos locales, ecológicos y sin envases. <br><br>
-Elige las bolsas de papel o de tela, no las de plástico que son contaminantes.<br><br>
-Beber agua del grifo<br><br>
-Recicla, Es una de las formas más fáciles de combatir el calentamiento global y el efecto invernadero.<br><br></h1>
<h3>"TOMAR AGUA NOS DA VIDA, TOMAR CONCIENCIA NOS DARÁ AGUA"</h3>


            </b-card-body>
      </b-col>
                    <b-col md="4">
 
                                 <div class="d-flex justify-content-center ">
       <div class="xs-row-12 justify-content-center d-xs-none d-none d-lg-block">
       <div class="imagen2">


                          <img class="img2"src="../assets/botella1.png" alt="flecha1"><br>
                          </div>
         <div class="imagen">

          <img src="../assets/basura1.png" alt="flecha1"><br>
          <h4>¡Aprende a Reciclar!</h4>
          </div>
          </div>
          </div>
                    </b-col>
    </b-row>
  </b-card>
  
<div class="box">
	<a class="button" href="#popup1">Noticia Importante</a>
</div>

<div id="popup1" class="overlay">
	<div class="popup">
		<h1>No se podrán usar pitillos, copitos ni mezcladores a partir de 2021</h1>
		<a class="close" href="#">&times;</a>
		<div class="content">
			El Ministerio de Ambiente expedirá en dos años una regulación para la sustitución gradual de esos materiales. Plantean extender la prohibición de bolsas plásticas y la responsabilidad del productor.
      Para el 2030 Colombia planea ser un país capaz de prevenir los impactos negativos causados por los residuos de plásticos y microplásticos sobre todos los ecosistemas, al realizar una gestión sostenible del plástico. Esa es la apuesta que tiene el Ministerio de Ambiente con la economía circular. Este jueves, el ministerio presentó los avances del “Plan Nacional para la Gestión Sostenible de los Plásticos de un Solo Uso”.

Este plan contempla para el 2021 la expedición de un proyecto de ley para la sustitución gradual de materiales como mezcladores, soportes plásticos para las bombas de inflar, pitillos para las bebidas, copitos de algodón o hisopos flexibles con puntas de algodón. Su uso se prohibirá.
		</div>
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
@import url('https://fonts.googleapis.com/css?family=Handlee&display=swap"');

h2{
  font-size: 5em;
  font-family: 'Pacifico', cursive; 
  color:black; 
  }
.fondo{
    margin-top: 50px;
    margin-bottom: 50px;
    background-color:  rgba(20,192,218,0.8);
    border-radius: 80px;
    border-style: none;
}
h1{
    font-size:1.5em;
   font-family: 'Handlee', cursive;
    color:black;
}
h3{
    font-size:2em;
    font-family: 'Pacifico', cursive; 
    color:black;
}
h4{
  font-size: 2em;
  font-family: 'Pacifico', cursive; 
  color:black; 
  }

 
  .imagen {
       margin-left: 0px;
       margin-right: 0px;
       padding-top:0px;
       position:relative;
  
      -webkit-animation:imagen 1s infinite;
    }
    
    @-webkit-keyframes imagen {
      0%       { bottom:1px; }
      25%, 75% { bottom:15px; }
      70%      { bottom:20px; }
      100%     {bottom:0;}
    }
.imagen2 {

      position:relative;
      -webkit-animation:imagen2 1s infinite;
    }
    
    @-webkit-keyframes imagen2 {
      0%       { bottom:1px; }
      25%, 75% { bottom:15px; }
      50%      { bottom:20px; }
      100%     {bottom:0;}
    }

.imagen2{
  
    display: block;
    margin-left: 0px;
    margin-right: 0px;
       padding-top:150px;

    .img2{
        display:block;
        margin-left: auto;
        margin-right: auto;
     
        width: 50%;   
        transform:scale(1);
        -ms-transform:scale(1); // IE 9 
        -moz-transform:scale(1); // Firefox 
        -webkit-transform:scale(1); // Safari and Chrome 
        -o-transform:scale(1); // Opera 
        -webkit-transition: all 500ms ease-in-out; // IE 9
        -moz-transition: all 50ms ease-in-out; // Firefox
        -ms-transition: all 50ms ease-in-out; // Safari and Chrome 
        -o-transition: all 50ms ease-in-out; // Opera       
margin-bottom: -2em;
    }        
    &:hover{
        .img2{
         //translate(-50px,-50px) scale(0.5);
            -webkit-transform: translate(0px,130px) scale(0.1);
            -moz-transform: translate(0px,130px) scale(0.1);
            -o-transform: translate(0px,130px) scale(0.1);
            -ms-transform: translate(0px,130px) scale(0.1);
          
            -moz-border-radius: 0px;
                
        }
    
    } 
    
}
body {
  font-family: Arial, sans-serif;
  
  background-size: cover;
  height: 100vh;
}

a{
    font-size:2em;
    font-family: 'Pacifico', cursive; 
    color:black;
}


.button {
  font-size: 2em;
  padding: 10px;
  color: black;
  border: 2px solid rgb(255, 92, 66);
  border-radius: 20px/50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.button:hover {
  background: rgb(255, 92, 66);
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06D85F;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 700px){
  .box{
    width: 70%;
  }
  .popup{
    width: 70%;
  }
}
</style>
