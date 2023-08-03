<template>
  <section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div id="myform" class="text-black text-center">

        <div class="px-5 pt-5 ms-xl-4">
           <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512"><path d="M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
        </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          <form @submit.prevent="handleCreateAccount" style="width: 23rem;">
            <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign Up</h3>

            <div class="form-outline mb-4 text-start">
              <input v-model="username" style="font-size:14px" type="name" id="username" class="form-control form-control-lg" :placeholder="username_placeholder" />
              <label class="form-label" for="form2Example18">Username</label>
            </div>

            <div class="form-outline mb-4 text-start">
              <input v-model="email" style="font-size:14px" type="email" id="email" class="form-control form-control-lg" :placeholder="email_placeholder" />
              <label class="form-label" for="form2Example18">Email address</label>
            </div>

            <div class="form-outline mb-4 text-start">
              <input style="font-size:14px" v-model="password" type="password" id="password" class="form-control form-control-lg" :placeholder="password_placeholder" />
              <label class="form-label" for="form2Example28">Password</label>
            </div>

            <div class="pt-1 mb-4">
              <button  class="btn btn-info btn-lg btn-block text-white" type="submit" @click="handleClick">Create Account</button>
            </div>
          </form>

        </div>

      </div>

    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return{
      username:"",
      isUsername:"grey",
      isUsername2:"white",
      email:"",
      isEmail:"grey",
      isEmail2:"white",
      password:"",
      isPassword:"grey",
      isPassword2:"white",
      username_placeholder:"Input a username",
      email_placeholder:"Enter valid email address",
      password_placeholder:"Input valid password",
      isFilled: false
    }
  },
  methods: {
    handleCreateAccount() {
      if(this.username === "") {
        this.username_placeholder = "Username field cannot be blank"
        this.isUsername = "red"
        this.isUsername2 = "pink"
      }
      if(this.email === "") {
        this.email_placeholder = "Email field cannot be blank"
        this.isEmail = "red"
        this.isEmail2 = "pink"

      }
      if(this.password === "") {
        this.password_placeholder = "Password field cannot be blank"
        this.isPassword = "red"
        this.isPassword2 = "pink"

      }
      else if(this.password.length < 6 ) {
        this.password = ""
        this.password_placeholder = "Password must contain at least 6 characters"
        this.isPassword = "red"
        this.isPassword2 = "pink"
      }
      else{
        this.isFilled = true
        this.isUsername = "grey"
        this.isEmail = "grey"
        this.isPassword = "grey"
      }
    },
    handleClick() {
      setTimeout(() => {
        if (this.isFilled) {
        window.location.href = '/';
    }
      }, 2000);
  }
  }

}
</script>

<style>

.bg-image-vertical {
position: relative;
overflow: hidden;
background-repeat: no-repeat;
background-position: right center;
background-size: auto 100%;
}

#myform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#username {
  background-color: v-bind(isUsername2);
}
#email {
  background-color: v-bind(isEmail2);
}
#password {
  background-color: v-bind(isPassword2);
}

#username::placeholder {
  color: v-bind(isUsername);
}
#email::placeholder {
  color: v-bind(isEmail);
}
#password::placeholder {
  color: v-bind(isPassword);
}



@media (max-width: 992px) {

}

</style>
