<template>
       <div id="comments" class="bg-white rounded-2 mb-2">
            <div id="counter-div" class="order-2 order-md-1 d-none d-md-flex" >
            <div id="count" class="rounded-3">
                <span @click="addScore1" id="ops"><b>+</b></span>
                <span id="number"><b>{{data.comments[1].replies[0].score}}</b></span>
                <span @click="subtractScore1" id="ops"><b>-</b></span>
            </div>

            </div>

            <div id="text-wrapper" class="pt-2 order-1 order-md-2">

            <div id="comment-info">
                <div id="first-info">
                <img src="../../assets/avatars/image-ramsesmiron.png" alt="amyrobson">
                <h6 class="m-0"><b>{{data.comments[1].replies[0].user.username}}</b></h6>
                <span>{{data.comments[1].replies[0].createdAt}}</span>
                </div>

                <div @click="handleClicked1" id="second-info" class="d-none d-md-flex">
                <img src="../../assets/icon-reply.svg" alt="reply">
                <p class="m-0">Reply</p>
                </div>
            </div>

            <div id="comment-text" class="pt-2">
                <p><b>@{{data.comments[1].replies[0].replyingTo}}</b> {{ data.comments[1].replies[0].content}}</p>
            </div>

            </div>

            <div id="new-div" class="order-2 d-flex d-md-none">
        <div id="count" class="rounded-3">
            <span @click="addScore1" id="ops"><b>+</b></span>
            <span id="number"><b>{{data.comments[1].replies[0].score}}</b></span>
            <span @click="subtractScore1" id="ops"><b>-</b></span>
          </div>

          <div  @click="handleClicked1" id="second-info">
              <img src="../../assets/icon-reply.svg" alt="reply">
              <p class="m-0">Reply</p>
            </div>

      </div>
      </div>

      <AddReply :style= "[clicked1 ? {'display':'none'} : {}]"/>


</template>

<script>
import AddReply from "../AddReply.vue"

export default {
  props: ['data'],
  components:{AddReply},
    name: 'ReplyComponent',
       data() {
    return {
      clicked1:true,
      clicked2:true,
    }
  },

  methods: {
    addScore1() {
      this.data.comments[1].replies[0].score++
    },

    subtractScore1() {
      if(this.data.comments[1].replies[0].score > 0)  
      this.data.comments[1].replies[0].score--
    },
     handleClicked1() {
      this.clicked1 = !this.clicked1
    },

    handleClicked2() {
      this.clicked2 = !this.clicked2
    }
  }

}
</script>

<style scoped>
#comments {
    width: 85%;
}

#first-info {
    min-width: 50%;
}

#second-info {
    width: 12%;
}

@media only screen and (max-width: 767px){ 
  #comments {
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
  min-width: 70%;
}

#second-info {
  width: 17%;
}
}


</style>