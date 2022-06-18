<template>
  <v-app>
    
    <v-main class="mb-12">
      <v-row class="noSide" no-gutters>
           <v-col class="text-center">
            <v-sheet color="#000040" style="padding:90px 0px" height=125%>
          <v-img width="563px" height="463px" style="margin:auto" src="../assets/bitcoinlogin.png" />
         </v-sheet>
        </v-col>
        <v-col>
             <v-card  class="rounded-xl laptopWidth">
          <v-container style="padding:10%">
            <h1 style="font-size:48px" class="font-weight-bold">
              Sign in
            </h1>

            <p style="font-size:14px">
              Enter your details correctly below
            </p>

            <v-alert v-model="snackbar" type="error">
              {{ error }}
            </v-alert>

            <v-form @submit.prevent="login()">
            
                  <v-form @submit.prevent="login()">
                    <label>Email address</label>
                    <v-text-field
                      v-model="email"
                      outlined
                      single-line
                      label="Email"
                      type="email"
                      color="#f66c1f"
                      style="border-radius:8px;margin-bottom:-15px"
                      @submit.prevent="login()"
                    />
                  </v-form>
            
              <v-form @submit.prevent="login()">
                  <label>Password</label>
                <v-text-field
                  v-model="password"
                  outlined
                  single-line
                  color="#f66c1f"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  label="Password"
                  @click:append="show = !show"
                  style="border-radius:8px;margin-bottom:-16px"
                  @submit.prevent="login()"
                />
              </v-form>
              <v-btn
                block
                color="#000040"
                class="animate__animated animate__fadeInUp white--text"
                @click="login"
                x-large
                style="border-radius:8px;font-size:14px; margin-top:-9px"
                :loading="loading"
              >
                Proceed
              </v-btn>
              <!-- <div class="or">
                <h2 class="orText">OR</h2>
                <div class="line"></div>
              </div> -->
            </v-form>

            <router-link style="text-decoration:none" to="/reset-password"><p class="text-center mt-4" style="color:#FF7B00">
              Forgot Password?
            </p></router-link>


            <p
              class="text-center mt-6"
              style="font-size:14px;margin-bottom:0px;padding-bottom:0px"
              to="/login"
            >
              Don't have an account? <router-link style="text-decoration:none;color:#FF7B00" to="/signup">Create Account</router-link>
            </p>
            <v-btn outlined large to="/signup" style="border-radius:12px;margin-top:10px" block color="#FF7B00">
             Create Account

            </v-btn>

          </v-container>
             </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
import {mapState} from "vuex"

export default {
  name: "Signup",
 
  data() {
    return {
      loading: false,
      email: "",
      displayName: "",
      password: "",
      person: "",
      error: null,
      country: "",
      snackbar: false,
      timeout: 3000,
      y: "top",
      show: false,
      slug: "",
      rules: {
        required: (value) => !!value || "Required.",
        emailMatch: () => "The email and password you entered don't match",
      },
    };
  },
  computed:{
    ...mapState({
      user:"user"
    })
  },
  created() {
    window.scrollTo(0, 0);
  },
  // Signing in with social media accounts
  mounted() {
  },
  //signing with social media ends
  ////////
  //signing up with email and password and automatically creating user profile slug
  methods: {
    login(){
      this.loading = true
    if(this.email ==""){
           this.$swal({
          title: "Error",
          text: "Please enter email",
          icon: "error",
          confirmButtonText: "Ok",
        })
         this.loading = false
      }
      else if(this.password == ""){
          this.$swal({
          title: "Error",
          text: "Please enter your password",
          icon: "error",
          confirmButtonText: "Ok",
        })
         this.loading = false
      }
      else{
        axios({
        method: "POST", 
        url: "https://app.lightningescrow.io/login/v2/",
        data: {
          email: this.email,
          password: this.password,
        },
      }).then((response)=>{
        console.log(response)
        this.$router.push("/dashboard")
      })
      }
    }
  },
};
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