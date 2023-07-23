<template>

        <div id="reply-comments" class="bg-white rounded-2 mb-2">
                <div id="counter-div" class="order-2 order-md-1 d-none d-md-flex" >
                <div id="count" class="rounded-3">
                    <span @click="addReplyScore(reply)" id="ops"><b>+</b></span>
                    <span id="number"><b>{{reply.score}}</b></span>
                    <span @click="subtractReplyScore(reply)" id="ops"><b>-</b></span>
                </div>

                </div>

                <div id="text-wrapper" class="pt-2 order-1 order-md-2">

                <div id="comment-info">
                    <div id="reply-first-info">
                    <img src="../../assets/avatars/image-ramsesmiron.png" alt="amyrobson">
                    <h6 class="m-0"><b>{{reply.user.username}}</b></h6>
                    <span>{{reply.createdAt}}</span>
                    </div>

                    <div @click="show2 === index ? show2 = -1 : show2 = index" id="reply-second-info" class="d-none d-md-flex">
                    <img src="../../assets/icon-reply.svg" alt="reply">
                    <p class="m-0">Reply</p>
                    </div>
                </div>

                <div id="comment-text" class="pt-2">
                    <p><b>{{reply.replyingTo}}</b> {{reply.content}}</p>
                </div>

                </div>

                <div id="new-div" class="order-2 d-flex d-md-none">
            <div id="count" class="rounded-3">
                <span @click="addReplyScore(reply)" id="ops"><b>+</b></span>
                <span id="number"><b>{{reply.score}}</b></span>
                <span @click="subtractReplyScore(reply)" id="ops"><b>-</b></span>
              </div>

              <div  @click="show2 === index ? show2 = -1 : show2 = index" id="second-info">
                  <img src="../../assets/icon-reply.svg" alt="reply">
                  <p class="m-0">Reply</p>
                </div>

          </div>
              </div>  

              <transition name="fade">                  
                <AddReply v-if="show2 === index"  :reply = 'reply' :comment="comment" :index = 'index'/>
              </transition>



</template>

<script>
import AddReply from "../AddReply.vue"

export default {
  props: ['reply', 'show2', 'index', 'comment'],
  components:{AddReply},
    name: 'OtherReplies',

  methods: {
    addReplyScore(reply) {
      reply.score++
    },

    subtractReplyScore(reply) {
      if(reply.score > 0)  
     reply.score--
    },
  },


}
</script>

<style scoped>
</style>