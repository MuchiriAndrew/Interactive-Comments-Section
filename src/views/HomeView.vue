<template>
  <div class="container-fluid" id="wrapper">
    <div id="comments-container" class="">

      <Comments />
      <AddComment class="sticky-bottom"/>

    </div>

    
  </div>
</template>

<script>
import Comments from "../components/static/Comments.vue"
import AddComment from "../components/AddComment.vue"
import allData from "../data.json"

export default {
  components:{AddComment, Comments},
  name: 'HomeView',
  data() {
    return {
      data:allData,
      currentUser: []
    }
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
