<template>
<div>
    <h2> A la hora de Comer</h2>
   
    <b-card no-body class="overflow-hidden fondo container" style="max-width: 70%;">
    <b-row no-gutters>
      <b-col md="8"style="text-align:left">
            <b-card-body title="">
            <h3>Elige reutilizar</h3>
                <h1>

-Usa servilletas de tela en vez de servilletas de papel o toallas de papel.<br>
- Busca dos o tres por cada miembro de tu familia (las tiendas de artículos usados y las ventas de garaje son una excelente fuente).<br>
-Si todas no son iguales y no están demasiado sucias, los miembros de tu familia pueden usarlas para más de una comida.<br>
-Empaca un almuerzo sin generar desperdicios. Usa una lonchera y no una bolsa de papel.<br>
-Usa recipientes de alimentos reutilizables en vez de bolsas de plástico o bebidas preenvasadas, en tu lonchera y en casa. Si usas bolsas de plástico con cierre para almacenar los alimentos, puedes lavarlas y reutilizarlas varias veces. No reutilices bolsas que contenían carne.
<br>
-Evita usar platos de papel, manteles de papel o plástico y vajilla de plástico desechable.<br>
-Usa una toallita en vez de toallitas desechables para el rostro.<br>
-Usa toallas de tela y no de papel para la cocina y el baño.<br>
-Limpia con toallas de felpa en vez de toallas o toallitas de papel.<br>
-Usa pañales de tela, al menos cuando estés en casa. <br>
-Lava los pañales en vez de tirarlos.<br>
-Usa una copa menstrual o almohadillas de tela lavables.<br>
               <br>
                </h1>
                <h3>"NO QUEREMOS UN MEDIO AMBIENTE, LO QUEREMOS COMPLETO"</h3>
            </b-card-body>
      </b-col>
                    <b-col md="4">
                     </br>

                                 <div class="d-flex justify-content-center "  >
       <div class="xs-row-12 justify-content-center d-xs-none d-none d-lg-block">
         <div class="imagen2">


                          <img class="img2"src="../assets/botella2.png" alt="flecha1"><br>
                          </div>
         <div class="imagen">

          <img src="../assets/basura2.png" alt="flecha1"><br>
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
		<h1>Necesitará 96 envases para obtener un pasaje de TransMilenio</h1>
		<a class="close" href="#">&times;</a>
		<div class="content">
		El Distrito ya tiene 9 máquinas para el depósito de material reciclable a cambio recargas a las tarjetas ‘tullave’. Se busca promover la cultura del reciclaje y dar otra alternativa de pago. La iniciativa servirá más para lo primero que para lo segundo.
		Uno de los problemas que tiene el mundo es la falta de conciencia con el ambiente. En Bogotá, cada día llegan al relleno sanitario de doña Juana 6.300 toneladas de residuos, de los cuales solo se reciclan el 15 por ciento. Mientras tanto en el mundo ya hay países que reciclan el 90 por ciento de los desechos que producen. Con lo que se entierra en el relleno de Doña Juana se podría generar energía para toda la ciudad u obtener 1.000 millones de pesos al día. Uno de los incentivos que han aplicado países como Japón o Dinamarca es dar algo a los ciudadanos a cambio del reciclaje. Por ejemplo si alguien recicla una lata de gaseosa, la próxima que compre le sale a un precio menor.
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
    margin-top: 20px;
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
     
        width: 60%;   
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
