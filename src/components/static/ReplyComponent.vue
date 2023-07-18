<template>
       <div id="comments" class="bg-light rounded-2 mb-2">
            <div id="counter-div" >
            <div id="count" class="rounded-3">
                <span id="ops"><b>+</b></span>
                <span id="number"><b>4</b></span>
                <span id="ops"><b>-</b></span>
            </div>

            </div>

            <div id="text-wrapper" class="pt-2">

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
    min-width: 55%;
}

#second-info {
    width: 12%;
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

</style>