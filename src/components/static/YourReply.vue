<template>
      <div id="comments" class="bg-white rounded-2 mb-2">
            <div id="counter-div" class="order-2 order-md-1 d-none d-md-flex">
            <div id="count" class="rounded-3">
                <span id="ops"><b>+</b></span>
                <span id="number"><b>2</b></span>
                <span id="ops"><b>-</b></span>
            </div>

            </div>

            <div id="text-wrapper" class="pt-2 order-1 order-md-2">

            <div id="comment-info">
                <div id="first-info">
                <img src="../../assets/avatars/image-juliusomo.png" alt="juliusomo">
                <h6 class="m-0"><b>juliusomo</b></h6>
                <span id="you-tag" class="rounded-1 px-2"><b>you</b></span>
                <span>2 days ago</span>
                </div>

                <div class="d-none d-md-flex" id="second-info">
                    <div id="delete">
                        <img src="../../assets/icon-delete.svg" alt="delete">
                        <p class="m-0">Delete</p>
                    </div>

                    <div id="edit">
                        <img src="../../assets/icon-edit.svg" alt="delete">
                        <p class="m-0">Edit</p>
                    </div>
                
                </div>
            </div>

            <div id="comment-text" class="pt-2">
                <p>I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.</p>
            </div>

            </div>

            <div class="d-flex d-md-none order-2" id="new-info">
                
                    <div id="count" class="rounded-3">
                        <span id="ops"><b>+</b></span>
                        <span id="number"><b>2</b></span>
                        <span id="ops"><b>-</b></span>
                    </div>

                    <div id="second">
                        <div id="delete">
                        <img src="../../assets/icon-delete.svg" alt="delete">
                        <p class="m-0">Delete</p>
                    </div>

                    <div id="edit">
                        <img src="../../assets/icon-edit.svg" alt="delete">
                        <p class="m-0">Edit</p>
                    </div>

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
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#delete {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
    color: red;
}
#delete img {
    height: 50%;
}
#delete p {
    color:  hsl(358, 79%, 66%);
}

#edit {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    height: 100%;
}
#edit img {
    height: 50%;
}

#edit:hover {
    cursor: pointer;
}
#delete:hover {
    cursor: pointer;
}

#you-tag {
    width: 25px;
    background-color: hsl(238, 40%, 52%);
    color: white;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
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

#new-info{
    width: 100%;
    display: flex;
    flex-direction:row ;
    justify-content: space-between;
}

#second {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
}

</style>