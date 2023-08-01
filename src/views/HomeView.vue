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


     setTimeout(() => {
      this.loading = false;
    }, 2000);
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
