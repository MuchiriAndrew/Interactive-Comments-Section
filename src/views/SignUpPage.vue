<template>
  <div class="container-fluid" id="mycontainer" v-if="loading">
    <Loading />
  </div>

  <div v-else id="container" class="p-0 container-fluid">

      <div id="myform" class="text-black text-center">
        <div class="mb-3">
           <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512"><path d="M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
        </div>

        <form @submit.prevent="handleCreateAccount">
          <h3 class="fw-normal mb-3 pb-3 text-start" style="letter-spacing: 1px;">Sign Up</h3>

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

          <div id="upload-div" class="d-flex d-lg-none text-start">
            <p>Upload Profile Picture</p>
          <input id="upload-input" class="mb-3 border-none p-3" type="file" @change="handleFileChange" accept="image/*">
          <div id="circular-image-container" class="border-none rounded-circle mb-4">
            <img v-if="previewUrl" :src="previewUrl" id="circular-image" class="rounded-circle">
            <img v-else src="https://i.ibb.co/jRVNwJJ/blank-profile-picture-973460-1280.webp" id="circular-image" class="rounded-circle">
          </div>
          <button @click="uploadImage" class="btn btn-primary rounded-3">Upload Image</button>
          </div>

          <div class="pt-1 mb-4">
            <button  class="btn btn-info btn-lg btn-block text-white" type="submit" @click="handleClick">Create Account</button>
          </div>
        </form>
      </div>

      <div id="upload-div" class="d-none d-lg-flex text-start">
        <p>Upload Profile Picture</p>
          <input id="upload-input" class="mb-3 border-none p-3" type="file" @change="handleFileChange" accept="image/*">
          <div id="circular-image-container" class="border-none rounded-circle mb-4">
            <img v-if="previewUrl" :src="previewUrl" id="circular-image" class="rounded-circle">
            <img v-else src="https://i.ibb.co/jRVNwJJ/blank-profile-picture-973460-1280.webp" id="circular-image" class="rounded-circle">
          </div>
          <button @click="uploadImage" class="btn btn-primary rounded-3">Upload Image</button>
      </div>

  </div>
</template>
<script>
import axios from 'axios';
import Loading from "../components/static/Loading.vue"

export default {
  components:{Loading},
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
      isFilled: false,
      selectedFile:null,
      previewUrl:null,
      apiKey: "221be5b6dc62093c08bc29052aff64d5",
      uploadedImageUrl: null,
      loading:false
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
       if(this.uploadedImageUrl === null) {
        this.uploadedImageUrl = "https://i.ibb.co/jRVNwJJ/blank-profile-picture-973460-1280.webp"
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

    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile) {
        this.previewUrl = URL.createObjectURL(this.selectedFile);
        console.log(this.previewUrl);
      }
      else {
        this.previewUrl = null
      }
    },

    async uploadImage() {
      this.loading = true
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      try {
        const response = await axios.post(`https://api.imgbb.com/1/upload?key=${this.apiKey}`, formData);
        this.uploadedImageUrl = response.data.data.display_url
        this.loading = false
        console.log("image posted");
        console.log(this.uploadedImageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    },

    handleClick() {
      setTimeout(() => {

        const newUser = {
        id: 10,
        name: this.username,
        email:this.email,
        image: this.uploadedImageUrl,
        password: this.password,
        created_at: "2023-07-29T09:33:29.278Z",
        updated_at: "2023-07-29T09:33:29.278Z"
    };
        fetch('https://owl-yd4u.onrender.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
    })
    .catch(err => console.log(err))
    console.log("user added")

        if (this.isFilled) {
        window.location.href = '/';
    }
      }, 2000);
  }
  }

}
</script>

<style scoped>

#container {
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
}

#mycontainer {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#myform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
#upload-div {
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#upload-div p {
  font-weight: 800;
}
#upload-div input {
  width: 70%;
}

#circular-image-container {
  width: 200px;
  height: 200px;
  margin-top: 10px;
  border: none;
}

#circular-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 992px) {
#container {
  min-height: 100vh;
  height: max-content;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
}

#myform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
}
#upload-div {
  width: 100%;
}
#upload-div input {
  width: 80%;
}
}

</style>
