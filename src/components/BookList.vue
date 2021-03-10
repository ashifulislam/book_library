<template>
  <div class="customer-list">

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
      <Book v-for="book in book"
                :key="book.id"
                :book="book"
                @onDelete="onDelete"
                @onEdit="onEdit"/>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import Book from "./Book";
export default {
  name:"BookList",
  components:{
  Book
  },
  props:{
  book:{
    type:Array
  }
  },
  methods:{
    onDelete(id)
    {
    this.$emit("onDelete",id);
    },
    onEdit(data)
    {
      this.$emit("onEdit",data);
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
