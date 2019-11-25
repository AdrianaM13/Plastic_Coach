<template>
<div>
    <h2>El Problema</h2>
    <b-card no-body class="overflow-hidden fondo container" style="max-width: 80%;">
 <b-row no-gutters>
      <b-col md="6">
            <b-card-body title="">
            
               <h1> Los plásticos han tomado la Tierra. Su creciente producción y uso amenazan con contaminar cada rincón del planeta, especialmente los mares, destino final de muchos de ellos, donde perjudican seriamente la salud de los ecosistemas acuáticos y la supervivencia de las especies que los pueblan. Los podemos encontrar en la playa, en las rocas, flotando en el agua e incluso en las zonas más profundas. Desde el Ártico hasta la Antártida, en zonas pobladas y en islas deshabitadas. Cada año, los mares y océanos son receptores de hasta 12 millones de toneladas de basura.
            </h1>
            </b-card-body>
      </b-col>
                    <b-col md="6">
                        <b-embed
                            type="iframe"
                            aspect="16by9"
                            src="https://www.youtube.com/embed/zO3jFKiqmHo"
                            allowfullscreen
                        ></b-embed>
                    
                    </b-col>
    </b-row>
  </b-card>
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
</style>
