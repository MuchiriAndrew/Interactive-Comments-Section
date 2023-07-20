<template>
  <div class="container-fluid" id="wrapper">
    <div id="comments-container" class="">

      <Comments :data = 'data' />
      <!-- <YourReply :data = 'data' :showModal = 'showModal' :addScore1="addScore1" :subtractScore1="subtractScore1"  /> -->
      <AddComment :data = 'data' />

    </div>

    
  </div>
</template>

<script>
import Comments from "../components/static/Comments.vue"
import YourReply from "../components/static/YourReply.vue"
import AddComment from "../components/AddComment.vue"
import allData from "../data.json"

export default {
  components:{YourReply, AddComment, Comments,},
  name: 'HomeView',
  data() {
    return {
      data:allData,
    }
  },

  methods: {

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
