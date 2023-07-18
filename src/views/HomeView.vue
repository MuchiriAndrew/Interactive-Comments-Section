<template>
  <div class="container-fluid" id="wrapper">
    <div id="comments-container" class="">

      <Comments />
      <AddReply />
      <ReplyComponent />
      <YourReply />
       <Update />
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
  //     myData : commentData.comments,
  //   }
  // },
}

</script>

<style>

@media only screen and (max-width: 992px){ 
  #comments-container{
    width: 100%;
  }
}



</style>
