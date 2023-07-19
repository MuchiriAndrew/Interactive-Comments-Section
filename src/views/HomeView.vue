<template>
  <div class="container-fluid" id="wrapper">
    <div id="comments-container" class="">

      <Comments :data = 'data' />
      <AddReply />
      <ReplyComponent :data = 'data' />
      <YourReply :data = 'data' :score1 = 'score1' :addScore1="addScore1" :subtractScore1="subtractScore1"  />
      <Update :data = 'data' :score1 = 'score1' :addScore1="addScore1" :subtractScore1="subtractScore1" />
      <AddComment />

    </div>

    
  </div>
</template>

<script>
import Comments from "../components/static/Comments.vue"
import ReplyComponent from "../components/static/ReplyComponent.vue"
import YourReply from "../components/static/YourReply.vue"
import AddComment from "../components/AddComment.vue"
import AddReply from "../components/AddReply.vue"
import Update from "../components/Update.vue"
import allData from "../data.json"

export default {
  components:{ReplyComponent, YourReply, AddComment, Comments, AddReply, Update},
  name: 'HomeView',
  data() {
    return {
      data:allData
    }
  },

  methods: {
    addScore1() {
      this.data.comments[1].replies[1].score++
    },

    subtractScore1() {
      if(this.data.comments[1].replies[1].score > 0)  
      this.data.comments[1].replies[1].score--
    },

    toggleReplyForm(){
        if (display === "none") {
          replyForm.style.display = "flex";
        } else {
          replyForm.style.display = "none";
        }
      }
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
