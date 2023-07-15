<template>
       <div v-for="reply in replyData" :key="reply"  id="comments" class="bg-light rounded-2 mb-1">
            <div id="counter-div" >
            <div id="count" class="rounded-3">
                <span id="ops"><b>+</b></span>
                <span id="number"><b>12</b></span>
                <span id="ops"><b>-</b></span>
            </div>

            </div>

            <div id="text-wrapper" class="pt-2">

            <div id="comment-info">
                <div id="first-info">
                <img src="./images/avatars/image-amyrobson.png" alt="amyrobson">
                <h6 class="m-0"><b>{{reply.user.username}}</b></h6>
                <span>{{reply.createdAt}}</span>
                </div>

                <div id="second-info">
                <img src="../assets/icon-reply.svg" alt="reply">
                <p class="m-0">Reply</p>
                </div>
                
            </div>

            <div id="comment-text" class="pt-2">
                <p>{{reply.content}}</p>
            </div>

            </div>
      </div>

</template>

<script>
import commentData from "../data.json"
export default {
    name: 'ReplyComponent',
  data() {
    return {
        myData : commentData.comments,
        replyData: [],
    }
  },


    
mounted() {
    for (let i = 0; i < this.myData.length; i++) {
      if(this.myData[i].replies.length > 0){
          console.log(this.myData[i].replies);
          this.replyData = this.myData[i].replies
    }
  }
}



}
</script>

<style scoped>
#comments {
    width: 85%;
}

#first-info {
    min-width: 45%;
}

</style>