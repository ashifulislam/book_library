<template>

  <div class="my-form">
<!--    <a class="nav-item"><router-link to="/admin_login" class="nav-link">Admin_Login</router-link></a>-->
    <form  class="ui form">
      <div class="fields">
        <div class="four wide field">
        <label>Book Name</label>
          <input type="text" name="name" placeholder="Enter book name"
          @change="handleChange" :value="form_book.name"/>
        </div>
        <div class="four wide field">
          <label>Book Description</label>
          <input type="text" name="description" placeholder="Enter description"
                 @change="handleChange" :value="form_book.description"/>
        </div>

        <div class="two wide field">
         <button class="ui primary button submit-button" @click="onFormSubmitBook">Save</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name:"BookForm",
  props:{
    form_book:{
      type:Object
    }
  },
  methods:{
    handleChange(event)
    {
      const {name,value} = event.target;
      let form = this.form_book;
      form[name]= value;
      this.form_book=form;
    },
    onFormSubmitBook(event) {
      // prevent form submit
      event.preventDefault();
      // form validation
      if (this.formValidation()) {
        // window.console.log("ready to submit");
        this.$emit("onFormSubmitBook", this.form_book);
        // change the button to save
        this.btnName = "Save";
        this.btnClass = "ui primary button submit-button";
        // clear form fields
        this.clearFormFields();
      }
    },
    formValidation() {
      // first name
      if (document.getElementsByName("name")[0].value === "") {
        alert("Enter  name");
        return false;
      }
      // last name
      if (document.getElementsByName("description")[0].value === "") {
        alert("Enter description");
        return false;
      }

      return true;
    },
    clearFormFields() {
      // clear form data
      this.form_book.name = "";
      this.form_book.description = "";
      this.form_book.isEdit = false;
      // clear form fields
      document.querySelector(".form").reset();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
