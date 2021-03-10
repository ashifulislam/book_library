<template>
  <div class="col-md-4">
    <h2>User_Registration</h2>
    <body class="text-center">
    <form action="#" @submit.prevent="registration" class="form-signin">
      <div>
        <h3 class="h3 mb-3 font-weight-normal">Registration</h3>
        <div v-if="success" class="alert alert-success">
        {{responseMessage}}
        </div>
        <div v-if="failed" class="alert alert-danger">
          {{responseMessage}}
        </div>
        <label for="name" class="sr-only">Enter Name</label>
        <input v-model="registrationData.name" type="text" id="name" class="form-control" placeholder="Enter name" required="" autofocus="">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input v-model="registrationData.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="registrationData.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <label for="password_confirmation" class="sr-only">Password</label>
        <input v-model="registrationData.password_confirmation" type="password" id="password_confirmation" class="form-control" placeholder="Confirm pass" required="">
        <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        <p>Already Registered? <a href="#"><router-link to="/user_login" >Login</router-link></a></p>

      </div>

    </form>


    </body>
  </div>



</template>

<script>
import axios from "axios";

export default {
  name: 'User_Registration',
  data()
  {
    return {
      url:"http://localhost/book_library_rest_api/public/api/register",
      registrationData: {
        name:'',
        email:'',
        password:'',
        password_confirmation:''
      },
      responseMessage:'',
      success:false,
      failed:false,
    }

  },
  methods:{

    registration()
    {
      axios.post(this.url,this.registrationData).then((response)=>{
        if(response.status === 200)
        {
          alert("Successfully registered");
          window.location.href = "http://localhost:8080/user_login"
        }
        else if(response.status === 300) {
          alert("invalid registered");

        }

      }).catch(e=>{
        alert(e);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
