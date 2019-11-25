
<template>
<div>

    <h2> A la hora de Desechar</h2>
    
    <b-card no-body class="overflow-hidden fondo container" style="max-width: 70%;">
 <b-row no-gutters>
      <b-col md="8"style="text-align:left">
            <b-card-body title="">
            <h3>10 Consejos para reciclar de forma correcta</h3><br>
               <h1> 
              1. Compra productos cuyos envases sean respetuosos con el medio ambiente <br>

2. Haz del reciclaje un juego. Los más pequeños aprenderán a reciclar divirtiéndose <br>

3. Separa los envases adecuadamente <br>

4. Pliega las cajas de cartón para ahorrar espacio y comodidad al transportarlas al contenedor azul y, por supuesto, nunca las dejes fuera del contenedor <br>

5. Tira las botellas de plástico al contenedor amarillo. Con sólo 40 se puede fabricar un forro polar <br>
 

6. Las latas de refrescos y de conservas van al contenedor amarillo también. ¿Sabías que con 80 latas se puede fabricar una llanta de bicicleta? <br>

7. Con solo 6 briks se puede fabricar una caja de zapatos ¡Recuerda, los briks van al contenedor amarillo y no al azul! <br>

8. Reutiliza las bolsas de plástico tantas veces como puedas, y al final como bolsa de basura para llevar los envases al contenedor amarillo <br>

9. Lleva al punto limpio los residuos especiales como aparatos eléctricos y electrónicos, bombillas, baterías, restos de pinturas, radiografías, aceite de cocina, etc. <br>

10. Nunca tires el aceite usado por el fregadero. Solo 1 litro puede contaminar hasta 1.000 litros de agua. Reutilízalo y finalmente llévalo a un punto limpio.
 <br>
            </h1>
          
    
         
            </b-card-body>
      </b-col>
                    <b-col md="4">
 
                                 <div class="d-flex justify-content-center ">
       <div class="xs-row-12 justify-content-center d-xs-none d-none d-lg-block">
       <div class="imagen2">


                          <img class="img2"src="../assets/botella3.png" alt="flecha1"><br>
                          </div>
         <div class="imagen">

          <img src="../assets/basura3.png" alt="flecha1"><br>
          <h4>¡Aprende a Reciclar!</h4>
          </div>
          </div>
          </div>
                           
                        </b-embed>
                    
                    </b-col>
    </b-row>
  </b-card>
   
<div class="box">
	<a class="button" href="#popup1">Noticia Importante</a>
</div>

<div id="popup1" class="overlay">
	<div class="popup">
		<h1>Sea un ciudadano más amigable con el medio ambiente en el 2019</h1>
		<a class="close" href="#">&times;</a>
		<div class="content">
		El mundo requiere acciones urgentes para impedir el cambio climático, producto de la contaminación. A los esfuerzos de los gobiernos es necesario sumarle los aportes que cada persona pueda realizar desde su vida cotidiana. Tips para ser más sostenible en este año que comienza.
		</div>
	</div>
</div>
</div>

    
</template>

<script>
  
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
