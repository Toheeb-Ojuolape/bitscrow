<template>
  <v-app>
    <v-main style="margin-top: 2px">
      <v-row no-gutters class="noSide">
        <v-col class="text-left">
            <v-sheet height=110% style="padding:99px 0px" color="black">
          <div>
          <v-img
            width="500px"
            height="460px"
            style="margin: auto"
            src="../assets/bitcoinsignup.jpg"
          />
          </div>
          </v-sheet>
        </v-col>
        <v-col >
          <v-card class="laptopWidth text-left" style="border-radius:20px">
            <v-container style="padding: 10%">
                 <p
            style="
              font-weight: 500;
              font-size: 14px;
              color: black;
              border:solid 1px black;
              border-radius:15px;
              width:47%;
              padding:10px

            "
          >
            Escrow Payment For African freelancers
          </p>
              <h1
                style="font-size: 40px; color: #ff7b00"
                class="font-weight-bold"
              >
                Sign up
              </h1>

              <p style="font-size: 14px">
                Enter your details correctly below, and proceed
              </p>

              <v-alert v-model="snackbar" type="error">
                {{ error }}
              </v-alert>

              <v-form @submit.prevent="signup()">
                <v-form @submit.prevent="signup()">
                  <label>First Name</label>
                  <v-text-field
                    v-model="fName"
                    outlined
                    single-line
                    label="First Name"
                    type="text"
                    color="#f66c1f"
                    style="border-radius: 8px; margin-bottom: -15px"
                    @submit.prevent="signup()"
                  />
                </v-form>



                <v-form @submit.prevent="signup()">
                  <label>Email address</label>
                  <v-text-field
                    v-model="email"
                    outlined
                    single-line
                    label="Email"
                    type="email"
                    color="#f66c1f"
                    style="border-radius: 8px; margin-bottom: -15px"
                    @submit.prevent="signup()"
                  />
                </v-form>

                


                <v-form @submit.prevent="signup()">
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
                    style="border-radius: 8px; margin-bottom: -16px"
                    @submit.prevent="signup()"
                  />
                </v-form>

                <v-btn
                  block
                  color="#FF7B00"
                  class="animate__animated animate__fadeInUp white--text"
                  @click="signup"
                  x-large
                  style="border-radius: 8px; font-size: 14px; margin-top: -9px"
                  :loading="loading"
                >
                  Sign up
                </v-btn>
                <!-- <div class="or">
                <h2 class="orText">OR</h2>
                <div class="line"></div>
              </div> -->
              </v-form>
              <p
                class="text-center mt-6"
                style="font-size: 14px; margin-bottom: 0px; padding-bottom: 0px"
                to="/login"
              >
                Already have an account?
                <router-link
                  style="text-decoration: none; color: #199958"
                  to="/login"
                  >Sign in</router-link
                >
              </p>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      loading: false,
      fName: "",
      email: "",
      displayName: "",
      password: "",
      person: "",
      error: null,
      snackbar: false,
      timeout: 3000,
      y: "top",
      show: false,
      showConfirm:false,
      slug: "",
      rules: {
        required: (value) => !!value || "Required.",
        emailMatch: () => "The email and password you entered don't match",
      },
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  // Signing in with social media accounts
  mounted() {},
  methods: {
    signup() {
      this.loading = true
      if(this.fName == ""){
         this.$swal({
          title: "Error",
          text: "Please enter your first Name",
          icon: "error",
          confirmButtonText: "Ok",
        })
         this.loading = false
      }

      else if(this.email ==""){
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
        url: "https://app.lightningescrow.io/setuser/v2/",
        data: {
          firstName: this.fName,
          email:this.email,
          password: this.password
        },
      }).then((response)=>{
          console.log(response)
          this.loading = false
          this.$router.push("/dashboard")
      })
      }
      
    },
  },
};
</script>

<style>
@media screen and (min-width:1023px){
    .laptopWidth{
        margin:50px !important
    }
}
.or {
  text-align: center;
}
.line {
  height: 1px;
  background: black;
}
.orText {
  position: relative;
  top: 10px;
  color: black;
  font-size: 13px;
  background: white;
  display: inline-block;
  padding: 0 20px;
  border-radius: 30px;
}
.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
  color: white;
}
@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
</style>
