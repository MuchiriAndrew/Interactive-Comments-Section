<template>
  <div class="container-fluid" id="wrapper">
    <div id="comments-container" class="">

      <Comments />
      <AddReply />
      <ReplyComponent />
      <YourReply :score1 = 'score1' :addScore1="addScore1" :subtractScore1="subtractScore1"  />
      <Update :score1 = 'score1' :addScore1="addScore1" :subtractScore1="subtractScore1" />
      <AddComment />
     

    </div>

    
  </div>
</template>

<script>
// import commentData from "../data.json"
import Comments from "../components/static/Comments.vue"
import ReplyComponent from "../components/static/ReplyComponent.vue"
import YourReply from "../components/static/YourReply.vue"
import AddComment from "../components/AddComment.vue"
import AddReply from "../components/AddReply.vue"
import Update from "../components/Update.vue"

export default {
  components:{ReplyComponent, YourReply, AddComment, Comments, AddReply, Update},
  name: 'HomeView',
  // data() {
  //   return {
  //   }
  // },

  data() {
    return {
      score1: 2,
    }
  },

  methods: {
    addScore1() {
      this.score1++
    },

    subtractScore1() {
      if(this.score1 > 0)  
      this.score1--
    },
  }
}

</script>

<style>

@media only screen and (max-width: 1200px){ 
  #comments-container{
    width: 100%;
  }
}



</style>
