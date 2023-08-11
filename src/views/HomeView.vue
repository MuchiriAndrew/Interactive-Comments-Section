<template>
  <div class="container-fluid" id="wrapper">

    <div v-if="loading">
      <Loading />
    </div>

    <div v-else id="comments-container" class="">
      <Comments :commentData = "commentData" :replyData = "replyData" :id = 'id'/>
    </div>
  </div>
</template>

<script>
import Comments from "../components/static/Comments.vue"
import Loading from "../components/static/Loading.vue"
import AddComment from "../components/AddComment.vue"

export default {
  components:{AddComment, Comments, Loading},
  props:['id'],
  name: 'HomeView',
  data() {
    return {
      currentUser: [],
      loading:true,
      commentData:[],
      replyData:[]
    }
  },

async mounted() {
    try {
      await this.loadData();
      this.loading = false;
    } catch (error) {
      console.error("Error loading data:", error);
    }
  },
  methods: {
    async loadData() {
      await this.fetchComments();
      await this.fetchReplies();
    },
    async fetchComments() {
      const response = await fetch("https://owl-yd4u.onrender.com/comments");
      this.commentData = await response.json();
    },
    async fetchReplies() {
      const response = await fetch("https://owl-yd4u.onrender.com/replies");
      this.replyData = await response.json();
    },
  },
};

</script>

<style>

@media only screen and (max-width: 1200px){
  #comments-container{
    width: 100%;
  }
}



</style>
