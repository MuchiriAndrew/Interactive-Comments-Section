<template>
<div id="comments" class="bg-white rounded-2 mb-2">
        <div id="counter-div" class="order-2 order-md-1 d-none d-md-flex">
          <div id="count" class="rounded-3">
            <span @click="addScore1" id="ops"><b>+</b></span>
            <span id="number"><b>{{data.comments[0].score}}</b></span>
            <span @click="subtractScore1" id="ops"><b>-</b></span>
          </div>

        </div>
        <div id="text-wrapper" class="pt-2 order-1 order-md-2">

          <div id="comment-info">
            <div id="first-info">
              <img src="../../assets/avatars/image-amyrobson.png" alt="amyrobson">
              <h6 class="m-0"><b>{{data.comments[0].user.username}}</b></h6>
              <span>{{data.comments[0].createdAt}}</span>
            </div>

            <div @click="handleClicked1" id="second-info" class="d-none d-md-flex">
              <img src="../../assets/icon-reply.svg" alt="reply">
              <p class="m-0">Reply</p>
            </div>
            
          </div>

          <div id="comment-text" class="pt-2">
            <p>{{data.comments[0].content}}</p>
          </div>

        </div>
        <div id="new-div" class="order-2 d-flex d-md-none">
        <div id="count" class="rounded-3">
            <span @click="addScore1" id="ops"><b>+</b></span>
            <span id="number"><b>{{data.comments[0].score}}</b></span>
            <span @click="subtractScore1" id="ops"><b>-</b></span>
          </div>

          <div  @click="handleClicked1" id="second-info">
              <img src="../../assets/icon-reply.svg" alt="reply">
              <p class="m-0">Reply</p>
            </div>

      </div>
      </div>
                  <AddReply :style= "[clicked1 ? {'display':'none'} : {}]"/>
      

      <div id="comments" class="bg-white rounded-2 mb-2">
        <div id="counter-div" class="order-2 order-md-1 d-none d-md-flex" >
          <div id="count" class="rounded-3">
            <span @click="addScore2" id="ops"><b>+</b></span>
            <span id="number"><b>{{this.data.comments[1].score}}</b></span>
            <span @click="subtractScore2" id="ops"><b>-</b></span>
          </div>

        </div>
        <div id="text-wrapper" class="pt-2 order-1 order-md-2">

          <div id="comment-info">
            <div id="first-info">
              <img src="../../assets/avatars/image-maxblagun.png" alt="maxblagun">
              <h6 class="m-0"><b>{{this.data.comments[1].user.username}}</b></h6>
              <span>{{this.data.comments[1].createdAt}}</span>
            </div>

            <div  @click="handleClicked2" id="second-info" class="d-none d-md-flex">
              <img src="../../assets/icon-reply.svg" alt="reply">
              <p class="m-0">Reply</p>
            </div>
            
          </div>

          <div id="comment-text" class="pt-2">
            <p>{{data.comments[1].content}}</p>
          </div>

        </div>
        <div id="new-div" class="order-2 d-flex d-md-none">
        <div id="count" class="rounded-3">
            <span @click="addScore2" id="ops"><b>+</b></span>
            <span id="number"><b>{{this.data.comments[1].score}}</b></span>
            <span @click="subtractScore2" id="ops"><b>-</b></span>
          </div>

          <div  @click="handleClicked2" id="second-info">
              <img src="../../assets/icon-reply.svg" alt="reply">
              <p class="m-0">Reply</p>
            </div>

      </div>
      </div>
                  <AddReply :style= "[clicked2 ? {'display':'none'} : {}]"/>
  
</template>

<script>
import AddReply from "../AddReply.vue"

export default {
  components: {AddReply},
  props : ['data'],
   data() {
    return {
      clicked1:true,
      clicked2:true,
    }
  },

  methods: {
    addScore1() {
      this.data.comments[0].score++
    },
    addScore2() {
     this.data.comments[1].score++
    },
    subtractScore1() {
      if(this.data.comments[0].score > 0)  
     this.data.comments[0].score--
    },
    subtractScore2() {
      if(this.data.comments[1].score > 0)
      this.data.comments[1].score--
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

<style>

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
  min-width: 40%;
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

#second-info {
  display: flex;
  flex-direction: row;
  width: 10%;
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

#second-info {
  display: flex;
  flex-direction: row;
  width: 20%;
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