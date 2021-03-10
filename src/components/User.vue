<template>
  <div class="customer-list">
    <a class="nav-item"><router-link to="/user_login" class="nav-link">Login</router-link></a>
    <a class="nav-item"><router-link to="/user_registration" class="nav-link">Registration</router-link></a>

    <div class="data">
    <table class="ui celled table">
     <thead>
     <tr>
       <th style="width:50px; text-align: center">
         ID
       </th>
       <th>
        Book Name
       </th>
       <th>
         Description
       </th>
       <th>
         Action
       </th>
     </tr>
     </thead>
      <tbody>
      <tr v-for="book in books" :key="book.id">
        <td>
          {{book.id}}
        </td>
        <td>
          {{book.name}}
        </td>
        <td>
          {{book.description}}
        </td>
        <td>
          <button class="mini ui blue button" @click="onEdit">AddToFavourite</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name:"User",
  data()
  {
    return {
      url:"http://localhost/book_library_rest_api/public/api/books",
      books:[],
    };
  },
  methods:{
    getBook()
    {
      axios.get(this.url).then(data=>{
        this.books = data.data;
      })
    },
  },
  created() {
    this.getBook();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
