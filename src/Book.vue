<template>
  <div id="app">
<!--   <div class="ui fixed inverted menu vue-color">-->

<!--   </div>-->
    <div class="ui container">
   <a href="#" class="header item"></a>
    </div>
    <div class="ui main container">
    <BookForm :form_book="form_book"  @onFormSubmitBook="onFormSubmitBook"
    />
     <Loader v-if="loader"/>
      <BookList :book="books"
                    @onDelete="onDelete"
                    @onEdit="onEdit"
                   />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Loader from "./components/Loader"
export default {
  name: 'Book',
  components: {
    BookList,
  BookForm,

    Loader,
  },
  data()
  {
   return {
     url:"http://localhost/book_library_rest_api/public/api/books",
     form_book:{
       name:'',
       description:'',
       is_edit:false,
     },
     books:[],
     loader:false,
   };
  },
  methods:{
    getBook()
    {
      this.loader = false;
      axios.get(this.url,{
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem("_token_book")}`
        }
      }).then(data=>{
        this.books = data.data;
        this.loader = false;
      })
    },
    deleteBook(id)
    {
      this.loader = true;
      axios.delete(`${this.url}/${id}`,{
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem("_token_book")}`
        }
      }).then((response)=>{
        if(response.status===202)
        {
          alert('You are an unauthenticated');
        }
        this.getBook();
      }).catch(e=>{
        alert(e);
      })


    },
    createBook(data)
    {
      this.loader=true;
      axios.post(this.url,{
        name:data.name,
        description:data.description,
      },{
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem("_token_book")}`
        }
      }).then((response)=>{
        if(response.status===202)
        {
          alert('You are an unauthenticated');
        }
        this.getBook();
      }).catch(e=>{
        alert(e);
      })
    },

    editBook(data)
    {
      this.loader = true;
      axios.put(`${this.url}/${data.id}`,{
        name:data.name,
        description:data.description,

      },{
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem("_token_book")}`
        }
      }).then((response)=>{
        if(response.status===202)
        {
          alert('You are an unauthenticated');
        }
        this.getBook();

      }).catch(e=>{
        alert(e);
      });
    },
    onFormSubmitBook(data)
    {

      if(data.is_edit)
      {
       this.editBook(data);
      }else{
       this.createBook(data);
      }
    },
    onDelete(id)
    {
    this.deleteBook(id);
    },
    onEdit(data)
    {
      this.form_book = data
      this.form_book.is_edit = true;
    },

  },
  created() {
    this.getBook();
  }
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
