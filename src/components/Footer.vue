<template>

<div>



  <footer class="container-fluid text-white py-3 row">
    
    
    <div class="impressum col-xs-12 col-sm-5 col-sm-pull-3 col-lg-6">
      <h1 class="title">Que tu coaching siga latente!</h1>
      <h5>Sigue nuestras redes para que no bajes tu ritmo con el planeta.</h5>   
    </div><!-- Ende Impressum -->
    <div class="sozial col-xs-12 col-sm-7 col-sm-push-3 col-lg-6">
      <ul class="row">
        <li class="col-xs-12 col-sm-3">
          <a href="#">
            <img class="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png">
          </a>
        </li>
        <li class="col-xs-12 col-sm-3">
          <a href="#">
            <img class="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png">
          </a>
        </li>
        <li class="col-xs-12 col-sm-3">
          <a href="#">
            <img class="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png">
          </a>
        </li>
        <li class="col-xs-12 col-sm-3">
          <a href="#">
            <img class="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_google_plus-128.png">
          </a>
        </li>
      </ul>
    </div><!-- Ende Sozial media -->
    <div class="container">
       &copy; 2019 Copyright: <a href="https://www.MDBootstrap.com"> PlasticCoach </a>
       </div>
  </footer>

  
</div>



</template>


<script>
export default {
    
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Handlee&display=swap');

footer{

    font-family: 'Handlee', cursive;
    margin: 0;
    margin-bottom: 0;
    
}

li
{
  list-style-type: none;
 
}

li:first-child
{
  margin:0;
}

.container-fluid
{
  background-color: rgb(255, 92, 66);
}

.copyright
{
  text-align: center;
}

.logo
{
  height:40%;
  margin-top: 45px;
  padding-right: 25px;
}
.impressum{
  padding:35px;

}


@media (max-width: 768px) 
{
  li
  {
    margin-left: 0;
    margin-bottom: 1vh;
  }
  
  .sozial
  {
  padding-top: 25px;
  }
}




</style>
