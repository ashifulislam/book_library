<template>

  <div class="my-form">
    <h3 style="text-align: center;">Manage Author</h3>
<!--    <a class="nav-item"><router-link to="/admin_login" class="nav-link">Admin_Login</router-link></a>-->
    <form  @submit.prevent="onFormSubmit"  class="ui form">
      <div class="fields">
        <div class="four wide field">
        <label>First Name</label>
          <input type="text" name="first_name" placeholder="Enter first name"
          @change="handleChange" :value="form.first_name"/>
        </div>
        <div class="four wide field">
          <label>Last Name</label>
          <input type="text" name="last_name" placeholder="Enter last name"
                 @change="handleChange" :value="form.last_name"/>
        </div>
        <div class="six wide field">
          <label>E-mail</label>
          <input type="email" name="email" placeholder="Enter email"
                 @change="handleChange" :value="form.email"/>
        </div>
        <div class="six wide field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter password"
                 @change="handleChange" :value="form.password"/>
        </div>
        <div class="two wide field">
         <button class="ui primary button submit-button">Save</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name:"myForm",
  props:{
    form:{
      type:Object
    }
  },
  methods:{
    handleChange(event)
    {
      const {name,value} = event.target;
      let form = this.form;
      form[name]= value;
      this.form=form;
    },
    onFormSubmit(event) {
      // prevent form submit
      event.preventDefault();
      // form validation
      if (this.formValidation()) {
        // window.console.log("ready to submit");
        this.$emit("onFormSubmit", this.form);
        // change the button to save
        this.btnName = "Save";
        this.btnClass = "ui primary button submit-button";
        // clear form fields
        this.clearFormFields();
      }
    },
    formValidation() {
      // first name
      if (document.getElementsByName("first_name")[0].value === "") {
        alert("Enter first name");
        return false;
      }
      // last name
      if (document.getElementsByName("last_name")[0].value === "") {
        alert("Enter last name");
        return false;
      }
      // email
      if (document.getElementsByName("email")[0].value === "") {
        alert("Enter email");
        return false;
      }
      if (document.getElementsByName("password")[0].value === "") {
        alert("Enter password");
        return false;
      }
      return true;
    },
    clearFormFields() {
      // clear form data
      this.form.first_name = "";
      this.form.last_name = "";
      this.form.email = "";
      this.form.password = "";
      this.form.isEdit = false;
      // clear form fields
      document.querySelector(".form").reset();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
