<template>
  <div class="container-fluid" id="wrapper">
    <div id="comments-container" class="bg-info">

      <Comments />
      <AddReply />
      <ReplyComponent />
      <YourReply />
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

export default {
  components:{ReplyComponent, YourReply, AddComment, Comments, AddReply},
  name: 'HomeView',
  // data() {
  //   return {
  //     myData : commentData.comments,
  //   }
  // },
}

</script>

<style>


</style>
