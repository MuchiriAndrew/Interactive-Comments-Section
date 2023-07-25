<template>
          <div id="comments" class="bg-white rounded-2 mb-2">
            <div id="counter-div" class="order-2 order-md-1 d-none d-md-flex">
              <div id="count" class="rounded-3">
                <span @click="addScore(comment)" id="ops"><b>+</b></span>
                <span id="number"><b>{{comment.score}}</b></span>
                <span @click="subtractScore(comment)" id="ops"><b>-</b></span>
              </div>

            </div>
            <div id="text-wrapper" class="pt-2 order-1 order-md-2">

              <div id="comment-info">
                <div id="first-info">
                  <!-- <img :src='comment.user.image.png' :alt="comment.user.username"> -->
                  <h6 class="m-0"><b>{{userData.username}}</b></h6>
                  <span>{{comment.created_at}}</span>
                </div>

                <div @click="show === index ? show = -1 : show = index" id="second-info" class="d-none d-md-flex">
                  <img src="../../assets/icon-reply.svg" alt="reply">
                  <p class="m-0">Reply</p>
                </div>
                
              </div>

              <div id="comment-text" class="pt-2">
                <p>{{comment.content}}</p>
              </div>

            </div>
            <div id="new-div" class="order-2 d-flex d-md-none">
            <div id="count" class="rounded-3">
                <span @click="addScore(comment)" id="ops"><b>+</b></span>
                <span id="number"><b>{{comment.score}}</b></span>
                <span @click="subtractScore(comment)" id="ops"><b>-</b></span>
              </div>

              <div  @click="show === index ? show = -1 : show = index" id="second-info">
                  <img src="../../assets/icon-reply.svg" alt="reply">
                  <p class="m-0">Reply</p>
                </div>

          </div>
          </div>

          <transition name="fade">                  
              <AddReply v-if="show === index" :comment = 'comment'/>
          </transition>
  
</template>

<script>
import AddReply from "../AddReply.vue"

export default {
    props: ['comment', 'show', 'index'],
    components: {AddReply},
    data() {
      return{
        userData:[]
      }
    },
    
    methods: {
    addScore(comment) {
      comment.score++

      fetch(`http://localhost:3000/comments/${comment.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           score:comment.score
        }),
    })
    .catch(err => console.log(err))

    },

    subtractScore(comment) {
      if(comment.score > 0)  
     comment.score--

     fetch(`http://localhost:3000/comments/${comment.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           score:comment.score
        }),
    })
    .catch(err => console.log(err))
    },
    },

    mounted() {
    const getUserData = async () => {
      const response = await fetch (`http://localhost:3000/users/${this.comment.user_id}`)
      const data = await response.json()
      this.userData = data
    }
    getUserData()
    .then(data=> console.log('user data found',))
  },

}
</script>

<style>

</style>