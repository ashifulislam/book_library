<template>

    <tr>
      <td>
        {{author.id}}
      </td>
      <td>
        {{author.first_name}}
      </td>
      <td>
        {{author.last_name}}
      </td>
      <td>
        {{author.email}}
      </td>
      <td>
        {{author.password}}
      </td>
      <td>
        <button class="mini ui blue button" @click="onEdit">Edit</button>
        <button class="mini ui red button" @click="onDelete" >Delete</button>
      </td>
    </tr>
</template>

<script>
export default {
  name:"author",
  props:{
    author:{
      type: Object
    }
  },
  methods:{
  onDelete()
  {

    this.$emit("onDelete",this.author.id);
  },
    onEdit()
    {
      this.$emit("onEdit",this.author);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
