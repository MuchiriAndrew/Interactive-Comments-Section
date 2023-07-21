<template>
    <template v-for="(comment, index) in commentData" :key="index">

      <YourComment v-if="comment.user.username === 'juliusomo'" :comment="comment"/>

          <div v-else id="comments" class="bg-white rounded-2 mb-2">
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
                  <img src="../../assets/avatars/image-amyrobson.png" alt="amyrobson">
                  <h6 class="m-0"><b>{{comment.user.username}}</b></h6>
                  <span>{{comment.createdAt}}</span>
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
                <span @click="subtractScore(comment)" id="ops"><b>+</b></span>
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

          <!-- The reply Component For Each Comment -->

          <div id="replies-container" v-for="(reply,index) in comment.replies" :key="index">
              <div id="replies-container" v-if="reply.user.username === 'juliusomo'">          
              <YourReply :reply = 'reply' :comment = 'comment'/>
              </div>

              <div v-else  id="reply-comments" class="bg-white rounded-2 mb-2">
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
                <AddReply v-if="show2 === index" style="width:85%" :reply = 'reply' :comment="comment" :index = 'index'/>
              </transition>
           </div>


    </template>
</template>

<script>
import AddReply from "../AddReply.vue"
import ReplyComponent from "./ReplyComponent.vue"
import YourReply from "./YourReply.vue"
import YourComment from "./YourComment.vue"

export default {
  components: {AddReply, ReplyComponent,YourReply, YourComment},
  props : ['data'],
   data() {
    return {
      show:false,
      show2:false,
      commentData: [],
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

    addReplyScore(reply) {
      reply.score++
    },

    subtractReplyScore(reply) {
      if(reply.score > 0)  
     reply.score--
    },
  },

  mounted() {
    const getData = async () => {
      const response = await fetch ('http://localhost:3000/comments')
      const data = await response.json()
      console.log(data);
      this.commentData = data
    }
    getData()
    .then(data=> console.log('comments found',this.commentData))
  },
}
</script>

<style>

.fade-enter-from{opacity: 0;transform: translateY(-20px);}
.fade-enter-to{opacity: 1;}
.fade-enter-active{transition: all 0.5s ease-in-out;}

.fade-leave-from{ opacity: 1;}
.fade-leave-to{opacity: 0;transform: translateY(-20px);}
.fade-leave-active{transition: all 0.5s ease-in-out;}

#wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(228, 33%, 97%);
}
#comments-container {
  min-height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

#comments {
  width: 100%;
  height: auto;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

#reply-comments {
  width: 85%;
  height: auto;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

#replies-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

#counter-div{
  height: 100px;
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

#count {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 70px;
  background-color: hsl(223, 19%, 93%);
}

#text-wrapper {
  width: 90%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  justify-content: space-around;
}

#comment-info {
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#first-info {
  display: flex;
  min-width: 35%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#reply-first-info {
  display: flex;
  min-width: 50%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#first-info img {
  height: 100%;
}

#first-info span {
color: hsl(211, 10%, 45%);
}
#reply-first-info img {
  height: 100%;
}

#reply-first-info span {
color: hsl(211, 10%, 45%);
}

#second-info {
  display: flex;
  flex-direction: row;
  width: 10%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  margin-right: 15px;
}

#reply-second-info {
  display: flex;
  flex-direction: row;
  width: 12%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  margin-right: 15px;
}

#second-info p {
  font-weight: 500;
  color: hsl(238, 40%, 52%);
}

#second-info :hover {
  cursor: pointer;
}

#second-info img{
  height: 35%;
}
#reply-second-info p {
  font-weight: 500;
  color: hsl(238, 40%, 52%);
}

#reply-second-info :hover {
  cursor: pointer;
}

#reply-second-info img{
  height: 35%;
}

#comment-text {
  color: hsl(211, 10%, 45%);
}

#ops {
  color:hsl(239, 57%, 85%);
}

#ops:hover {
  color: hsl(238, 40%, 52%);
  cursor: pointer;
}
#number {
  color: hsl(238, 40%, 52%);
}

@media only screen and (max-width: 767px){ 
#comments {
  height: auto;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
}

#reply-comments {
  width: 90%;
  height: auto;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
}

#counter-div{
  height: max-content;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
}

#count {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  height: 30px;
  background-color: hsl(223, 19%, 93%);
}

#text-wrapper {
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  justify-content: space-around;
}

#comment-info {
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#first-info {
  min-width: 60%;
}
#reply-first-info {
  min-width: 70%;
}

#second-info {
  display: flex;
  flex-direction: row;
  width: 20%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  margin-right: 15px;
}
#reply-second-info {
  display: flex;
  flex-direction: row;
  width: 17%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  margin-right: 15px;
}

#new-div {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
}

</style>