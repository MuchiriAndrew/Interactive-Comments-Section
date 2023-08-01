<template>
  <div class="container-fluid" id="wrapper">

    <div v-if="loading">
      <Loading />
    </div>

    <div v-else id="comments-container" class="">
      <Comments :commentData = "commentData" :replyData = "replyData"/>
      <AddComment />
    </div>


  </div>
</template>

<script>
import Comments from "../components/static/Comments.vue"
import Loading from "../components/static/Loading.vue"
import AddComment from "../components/AddComment.vue"
import allData from "../data.json"

export default {
  components:{AddComment, Comments, Loading},
  name: 'HomeView',
  data() {
    return {
      data:allData,
      currentUser: [],
      loading:true,
      commentData:[],
      replyData:[]
    }
  },
  mounted() {
    this.loading = true
    console.log(this.loading);

    const getData = async () => {
      const response = await fetch ('https://owl-yd4u.onrender.com/comments')
      const data = await response.json()
      this.commentData = data
    }
    getData()
    .then(data=> console.log('comments found',this.commentData))

    const getReplies = async () => {
      const response = await fetch ('https://owl-yd4u.onrender.com/replies')
      const data = await response.json()
      this.replyData = data
    }
    getReplies()
    .then(data=> console.log('replies found',this.replyData))

// const getData = () => {
//       const xhr = new XMLHttpRequest();
//       xhr.open('GET', 'https://owl-yd4u.onrender.com/comments', false); // The 'false' flag makes the request synchronous.
//       xhr.send();

//       if (xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         this.commentData = data
//       } else {
//         throw new Error('Failed to fetch data.');
//       }
//     }
//     getData()
//     console.log("comments found");

//     const getReplies = () => {
//       const xhr = new XMLHttpRequest();
//       xhr.open('GET', 'https://owl-yd4u.onrender.com/replies', false); // The 'false' flag makes the request synchronous.
//       xhr.send();

//       if (xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         this.replyData = data
//       } else {
//         throw new Error('Failed to fetch data.');
//       }
//     }
//     getReplies()
//     console.log("replies found");

//     this.loading = false
//     console.log(this.loading);


    setTimeout(() => {
      this.loading = false
      console.log(this.loading);
    }, 1000);
  },
}

</script>

<style>

@media only screen and (max-width: 1200px){
  #comments-container{
    width: 100%;
  }
}



</style>
