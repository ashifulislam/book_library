<template>
  <div id="app">
<!--   <div class="ui fixed inverted menu vue-color">-->

<!--   </div>-->
    <div class="ui container">
   <a href="#" class="header item"></a>
    </div>
    <div class="ui main container">
    <MyForm :form="form"  @onFormSubmit="onFormSubmit"
    />
     <Loader v-if="loader"/>
      <AuthorList :author="authors"
                    @onDelete="onDelete"
                    @onEdit="onEdit"
                   />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AuthorList from "./components/AuthorList";

import MyForm from "./components/MyForm";
import Loader from "./components/Loader"
export default {
  name: 'App',
  components: {
    AuthorList,
  MyForm,

    Loader,
  },
  data()
  {
   return {
     url:"http://localhost/book_library_rest_api/public/api/authors",
     form:{
       first_name:'',
       last_name:'',
       email:'',
       password:'',
       is_edit:false,
     },
     authors:[],
     loader:false,
   };
  },
  methods:{
    getAuthor()
    {
      this.loader = false;
      axios.get(this.url,{
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem("_token")}`
        }
      }).then(data=>{
        this.authors=data.data;
        this.loader = false;
      })
    },
    deleteAuthor(id)
    {
      this.loader = true;
      axios.delete(`${this.url}/${id}`,{
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem("_token")}`
        }
      }).then(()=>{

        this.getAuthor();
      }).catch(e=>{
        alert(e);
      })


    },
    createAuthor(data)
    {
      this.loader=true;
      axios.post(this.url,{
        first_name:data.first_name,
        last_name:data.last_name,
        email:data.email,
        password:data.password,
      },{
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem("_token")}`
        }
      }).then((response)=>{
        if(response.status === 202)
        {
          alert('Duplicate email entry');
        }

        this.getAuthor();
      }).catch(e=>{
        alert(e);
      })
    },

    editAuthor(data)
    {
      this.loader = true;
      axios.put(`${this.url}/${data.id}`,{
        first_name:data.first_name,
        last_name:data.last_name,
        email:data.email,
        password:data.password,
      },{
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem("_token")}`
        }
      }).then((response)=>{
        if(response.status === 202)
        {
          alert('Duplicate email entry');
        }
        this.getAuthor();

      }).catch(e=>{
        alert(e);
      });
    },
    onFormSubmit(data)
    {

      if(data.is_edit)
      {
       this.editAuthor(data);
      }else{
       this.createAuthor(data);
      }
    },
    onDelete(id)
    {
    this.deleteAuthor(id);
    },
    onEdit(data)
    {
      this.form = data
      this.form.is_edit = true;
    },

  },
  created() {
    this.getAuthor();
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
