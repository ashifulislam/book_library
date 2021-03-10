<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/author_login" class="nav-link">Author</router-link></li>
            <li class="nav-item"><router-link to="/admin_login" class="nav-link">Admin</router-link></li>
            <li class="nav-item"><router-link to="/user" class="nav-link">User</router-link></li>
          </ul>
        </div>
      </nav>
      <router-view class="view"></router-view>
    </div>
    <HelloWorld/>
    </div>
</template>

<script>


import HelloWorld from "./components/HelloWorld";
export default {
  name: 'App',
  components: {

    HelloWorld,

  },

}
</script>

<style>
.vue-color
{
  background:#41b883 !important;
}
.main.container
{
  margin-top:60px;
}
.submit-button
{
  margin-top:24px !important;
  float:right;
}
.ui.inverted.dimmer{
  background-color:rgba(255,255,255,0)!important;
}
.data{
  margin-top:15px;
}
thead tr th{
  background:white !important;
}

</style>
