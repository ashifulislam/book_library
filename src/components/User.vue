<template>
  <div class="customer-list">
    <a style="padding-left:7px;" ><router-link to="/user_login" >Login</router-link></a>
    <br>
    <a style="padding-left:7px;"><router-link to="/user_registration" >Registration</router-link></a>

    <div class="data">
      <h2 style="text-align: center">Show Books</h2>
    <table style="padding-left:7px;" class="ui celled table">
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
        <td v-if="ifUnauthenticated">
          <button class="mini ui blue button" @click="addToFavourite(book.id)">AddToFavourite</button>
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
      ifUnauthenticated:false,

      url:"http://localhost/book_library_rest_api/public/api/books",
      url_favourite_book:"http://localhost/book_library_rest_api/public/api/add_book_favourite",
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
    addToFavourite(id)
    {
      axios.post(this.url_favourite_book,{
          id: id
      },{
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem("_token_user")}`
        }
      }).then((response)=>{
       if(response.status===200)
       {
         alert('already added please add new one');
       }
       else{
         alert('added successfully');

       }
      }).catch(e=>{
        alert(e);
      });
    }
  },
  created() {
    this.getBook();
    if(localStorage.getItem("_token_user"))
    {
      this.ifUnauthenticated = true;

    }else{
      this.ifUnauthenticated = false;

    }
  }




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
