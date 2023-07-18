<template>
       <div id="comments" class="bg-white rounded-2 mb-2">
            <div id="counter-div" class="order-2 order-lg-1" >
            <div id="count" class="rounded-3">
                <span id="ops"><b>+</b></span>
                <span id="number"><b>4</b></span>
                <span id="ops"><b>-</b></span>
            </div>

            </div>

            <div id="text-wrapper" class="pt-2 order-1 order-lg-2">

            <div id="comment-info">
                <div id="first-info">
                <img src="../../assets/avatars/image-ramsesmiron.png" alt="amyrobson">
                <h6 class="m-0"><b>ramsesmiron</b></h6>
                <span>1 week ago</span>
                </div>

                <div id="second-info">
                <img src="../../assets/icon-reply.svg" alt="reply">
                <p class="m-0">Reply</p>
                </div>
            </div>

            <div id="comment-text" class="pt-2">
                <p>If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.</p>
            </div>

            </div>
      </div>
</template>

<script>
// import commentData from "../data.json"
export default {
    name: 'ReplyComponent',
//   data() {
//     return {
//         myData : commentData.comments,
//         replyData: [],
//     }
//   },


    
// mounted() {
//     for (let i = 0; i < this.myData.length; i++) {
//       if(this.myData[i].replies.length > 0){
//           console.log(this.myData[i].replies);
//           this.replyData = this.myData[i].replies
//     }
//   }
// }



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

@media only screen and (max-width: 768px){ 
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