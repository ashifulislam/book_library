<template>
  <div class="col-md-4">
    <h2>User_Login</h2>
    <body class="text-center">
    <form action="#" @submit.prevent="login" class="form-signin">
      <div>
        <h3 class="h3 mb-3 font-weight-normal">Please sign in</h3>
        <div v-if="success" class="alert alert-success">
        {{responseMessage}}
        </div>
        <div v-if="failed" class="alert alert-danger">
          {{responseMessage}}
        </div>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input v-model="loginData.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="loginData.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        <p>Not Registered? <a href="#"><router-link to="/user_registration" >Register</router-link></a></p>
      </div>

    </form>


    </body>
  </div>



</template>

<script>
import axios from "axios";

export default {
  name: 'User_Login',
  data()
  {
    return {
      url:"http://localhost/book_library_rest_api/public/api/user_login",
      loginData: {
        email:'',
        password:'',
      },
      responseMessage:'',
      success:false,
      failed:false,
    }

  },
  methods:{

    login()
    {
      axios.post(this.url,this.loginData).then((response)=>{

        if(response.status===200)
        {
          localStorage.setItem("_token_user", response.data['success']);
          window.location.href = "http://localhost:8080/show_favourite_book"

        }
        else{
          alert('Invalid credentials');
        }
      }).catch(e=>{
        alert(e);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
