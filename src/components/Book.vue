<template>

  <tr>
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
      <button class="mini ui blue button" @click="onEdit">Edit</button>
      <button class="mini ui red button" @click="onDelete" >Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name:"book",
  props:{
    book:{
      type: Object
    }
  },
  methods:{
    onDelete()
    {

      this.$emit("onDelete",this.book.id);
    },
    onEdit()
    {
      this.$emit("onEdit",this.book);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
