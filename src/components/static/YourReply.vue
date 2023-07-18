<template>
      <div id="comments" class="bg-light rounded-2 mb-2">
            <div id="counter-div" >
            <div id="count" class="rounded-3">
                <span id="ops"><b>+</b></span>
                <span id="number"><b>2</b></span>
                <span id="ops"><b>-</b></span>
            </div>

            </div>

            <div id="text-wrapper" class="pt-2">

            <div id="comment-info">
                <div id="first-info">
                <img src="../../assets/avatars/image-juliusomo.png" alt="juliusomo">
                <h6 class="m-0"><b>juliusomo</b></h6>
                <span id="you-tag" class="rounded-1 px-2"><b>you</b></span>
                <span>2 days ago</span>
                </div>

                <div id="second-info">
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

</style>