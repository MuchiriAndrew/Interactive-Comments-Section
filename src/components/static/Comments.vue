<template>
    <template v-for="(comment, index) in commentData" :key="index">

      <YourComment v-if="comment.user_id === 4" :comment="comment"/>
      <OtherComments v-else :comment = 'comment' :show = 'show' :index = 'index' :addScore = 'addScore' :subtractScore = 'subtractScore'/>

      <!-- The reply Component For Each Comment -->
      <div id="replies-container" v-for="(reply,index) in replyData" :key="index">
        <template v-if="reply.parent_comment_id === comment.id ">
          <YourReply v-if="reply.user_id === 4" :reply = 'reply' :comment = 'comment'/>
          <OtherReplies v-else :reply = 'reply' :show2 = 'show2' :index = 'index' :comment = 'comment' />
        </template>
      </div>

    </template>
</template>

<script>
import YourReply from "./YourReply.vue"
import YourComment from "./YourComment.vue"
import OtherComments from "./OtherComments.vue"
import OtherReplies from "./OtherReplies.vue"

export default {
  components: {YourReply, YourComment, OtherComments, OtherReplies},
   data() {
    return {
      show:false,
      show2:false,
      commentData: [],
      replyData: [],
    }
  },
  mounted() {
    const getData = async () => {
      const response = await fetch ('https://owl-yd4u.onrender.com/comments')
      const data = await response.json()
      this.commentData = data
    }
    getData()
    .then(data=> console.log('comments found',this.commentData))

    const getReplies = async () => {
      const response = await fetch ('https://owl-yd4u.onrender.com/replies')
      const data = await response.json()
      this.replyData = data
    }
    getReplies()
    .then(data=> console.log('replies found',this.replyData))
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
  min-width: 42%;
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
