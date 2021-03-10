<template>
  <div class="col-md-4">
    <h1>Author_Login</h1>
    <body class="text-center">
    <form action="#" @submit.prevent="login" class="form-signin">
      <div>
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
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
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </div>

    </form>


    </body>
  </div>



</template>

<script>
import axios from "axios";

export default {
  name: 'Author_Login',
  data()
  {
    return {
      url:"http://localhost/book_library_rest_api/public/api/author_login",
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
          window.location.href = "http://localhost:8080/book"

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
