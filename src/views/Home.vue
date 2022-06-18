<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>


<style>


@media screen and (min-width: 993px) {
   .ctabutton{
    background: #FF7B00;
    height:66px !important;
    padding:15px 40px 15px 40px !important;
    font-size:19px !important;
    font-weight: 700;
    margin:50px 0px

  }
  .dashboardCard{
    display:flex
  }

  .rightSpace{   
    margin:0px 30px 0px 0px
  }

  .cardHeight{
    height:264px;
    margin:0px 0px 20px 0px
  }

  .balanceBalance{
    padding:0px !important;
    margin:0px !important;
    font-size:60px !important;
    color:white
  }

  .balanceName{
    padding-top:20px;
    font-size: 25px !important;
    color:white
  }

   .capHeight{
    height:148px;
    margin:0px 0px 30px 0px
  }



  .cardColumn{
    margin:0px 30px 0px 0px;
    width:50%
  } 

  .dashboardColumn{
    margin:0px 30px 0px 0px;
    width:80%
  }

 

  .capColumn{
    margin:0px 30px 0px 0px;
    width:59%
  }

   .moneyColumn{
    margin:0px 30px 0px 0px;
    width:41%
  }

  .projectColumn{
    margin:0px 30px 0px 0px;
    width:61%
  }

    .upcomingColumn{
    margin:0px 60px 0px 60px;
    width:34%
  }

  .profileButtons{
    padding:0px 50px 0px 50px
  }


  .loginCard{
    display:flex
  }
  .logoPosition {
    padding: 30px 40px 20px 60px;
  }
  .headingText{
    font-size:64px;
    color:white;
    
  }
  .imageContainer{
    padding:79px;
    top:50%;
    text-align:center;
    vertical-align: middle;
    position: relative;
    transform: translateY(-50%);
  }
  .imageContainer p{
    font-size:24px;
    text-align: center;
    width:50%;
    margin:auto
  }
   .dashboard{
    width:50%
  }
  .sunshine{
    color:#FF7B00;
    font-weight:800;
    padding:30px 90px 0px 90px;
    line-height:80px;
    font-size:55px;
    width:70%;
    margin:0px auto 0px auto;
  }
   .buySolar{
    font-size:20px;
    margin:20px auto 40px auto;
    color:#000000
  }

   .welcomeBack{
    font-size:64px
  }

  .statistics{
    margin-top:180px;
    width:50%;
    margin:auto;
    margin:auto;
    display:flex;
    justify-content: space-between;
  }
  .statCircle{
    height:170px;
    width:170px;
  }
}

@media screen and (max-width: 992px) {
    .ctabutton{
    background: #FF7B00;
    height:66px !important;
    padding:15px 40px 15px 40px !important;
    font-size:19px !important;
    font-weight: 700;
    margin:0px 0px

  }
  .logoPosition {
    padding: 20px;
  }
  .headingText{
    font-size:60px;
    color:white;
  }
   .imageContainer{
    padding:30px;
    top:50%;
    text-align:center;
    vertical-align: middle;
    position: relative;
    transform: translateY(-50%);
  }
  .imageContainer p{
    font-size:24px;
    text-align: center;
    width:100%;
    margin:30px auto
  }
  .dashboard{
    width:80%
  }
  .sunshine{
    color:#FF7B00;
    font-weight:800;
    font-size:47px;
    width:80%;
    line-height:47px;
     margin:-100px auto 0px auto;
  }
  .buySolar{
    font-size:18px;
    width:100%;
    margin:20px auto 40px auto;
     color:#000000
  }
  .statistics{
    margin-top:180px;
    width:80%;
    margin:auto;
    display:flex;
    justify-content: space-between;
  }
   .statCircle{
    height:170px;
    width:170px;
  }
  .noSide{
    display:block
  }
}

  .capText{
    padding:0px !important;
    margin:0px !important;
    font-size:12px !important;
    color:white !important
  }
  .walletValue{
    padding:0px !important;
    margin:0px !important;
  }

  .capValue{
    color:white;
    font-size:19px
  }

 .balanceName{
    font-size: 15px;
    color:white;
    padding:0px;
    margin:0px;
  }

input[type=text]:focus{
   outline:none;
   border:none
}

input[type=number]:focus{
   outline:none;
   border:none
}

input[type=date]:focus{
   outline:none;
   border:none
}

textarea[type=text]:focus{
   outline:none;
   border:none;
   height:130px
}

.balanceBalance{
    font-size:35px;
    color:white;
    padding:0px !important;
    margin:0px !important;
  }



/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
   .ctabutton{
    background: #FF7B00;
    height:66px !important;
    padding:15px 40px 15px 40px !important;
    font-size:19px !important;
    font-weight: 700;
    margin:0px 0px

  }

  .logoPosition {
    padding:20px !important
  }
  .headingText{
    font-size:50px;
    color:white;
  }
  .imageContainer{
    top:50%;
    text-align:center;
    vertical-align: middle;
    position: relative;
    transform: translateY(-50%);
  }
   .imageContainer h2{
    font-size:50px !important;
    line-height:50px
  }
 .imageContainer p{
    font-size:19px;
    margin:32px 0px
  }
  .dashboard{
    width:90%
  }

   .cardHeight{
    height:152px;
    margin:0px 0px 19px 0px
  }

   .capHeight{
    height:88px;
    margin:0px 0px 19px 0px
  }

   .welcomeBack{
    font-size:30px
  }

  .sunshine{
    color:#FF7B00;
    font-weight:800;
    font-size:40px;
    width:100%;
    padding:20px;
    margin:0px auto 0px auto;
    line-height:0px !important;
  }
  .buySolar{
    font-size:18px;
    width:94%;
    margin:20px auto 40px auto;
     color:#000000
  }

    .statistics{
    margin:180px 30px 0px 30px;
    width:100%;
    margin:auto;
    
  }

}

@media screen and (max-width:526px){
  .statistics{
    margin:180px 40px 0px 40px;
    width:100%;
    margin:auto;
    display:block
  }
}

@media screen and (max-width: 378px) {
   .headingText{
    font-size:40px;
    color:white;
  }
  .hideLine{
    display:none
  }
  .welcomeBack{
    font-size:30px
  }

   .cardHeight{
    height:152px
  }

  .capHeight{
    height:88px
  }

   .statistics{
    margin-top:180px;
    width:100%;
    margin:auto;
    display:block
  }

  .statCircle{
   margin:auto
  }

}


@media screen and (max-width: 252px) {
   .headingText{
    font-size:35px;
    color:white;
  }
}

</style>