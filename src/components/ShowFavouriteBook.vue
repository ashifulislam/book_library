<template>
  <div class="customer-list">
    <h1>Show favourite books</h1>
    <div class="data">
    <table class=" celled table">
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

      </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name:"ShowFavouriteBook",
  data()
  {
    return {
      url:"http://localhost/book_library_rest_api/public/api/show_book_favourite",
      books:[],
    };
  },
  methods:{
    getBook()
    {
      axios.get(this.url,{
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem("_token_user")}`
        }
    }).then(data=>{
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
