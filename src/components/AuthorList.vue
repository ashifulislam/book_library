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
        First Name
       </th>
       <th>
         Last Name
       </th>
       <th>
         Email
       </th>
       <th>
         Action
       </th>
     </tr>
     </thead>
      <tbody>
      <Author v-for="author in author"
                :key="author.id"
                :author="author"
                @onDelete="onDelete"
                @onEdit="onEdit"/>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import Author from "./Author";
export default {
  name:"authorList",
  components:{
  Author
  },
  props:{
  author:{
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
