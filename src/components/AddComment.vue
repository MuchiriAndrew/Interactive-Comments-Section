<template>
  <div id="comments" class="bg-white rounded-2 mb-1 pt-3">

            <div id="image-div" class="d-none d-md-block">
                <img src="../assets/avatars/image-juliusomo.png" alt="juliusomo">
            </div>

            <form @submit="handleSend" id="text-area" class="">
                <textarea v-model="commentText" name="addcomment" id="addcomment" class="rounded-2 p-2" placeholder="Add a comment..."></textarea>
                <button class="rounded-2 d-none d-md-block">SEND</button>
            </form>


            <div id="newone" class="d-flex d-md-none">
                <div id="image-div">
                    <img src="../assets/avatars/image-juliusomo.png" alt="juliusomo">
                </div>
                    <form @submit="handleSend">
                        <button  class="rounded-2">SEND</button>
                    </form>
                          
            </div>
            
    </div>

</template>

<script>
export default {
    props:['data'],
    data() {
        return {
            commentText: null
        }
    },

    methods: {
        handleSend() {     
            location.reload()       
    const newComment = {
          id: Date.now(),
          content: this.commentText,
          createdAt: "now",
          score: 0,
          user: {
            image: {
              png: "./image-juliusomo.png",
              webp: "./image-juliusomo.webp",
            },
            username: "juliusomo",
          },
          replies: [],
    };        

    fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment),
    })
    .catch(err => console.log(err))
    console.log("push reached")
    }
    },
}
</script>

<style scoped>
#comments {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding-bottom: 20px;
}

#image-div{
    width: max-content;
    height: 100%;
}

#image-div img {
    width: 40px;
}

#text-area {
    width: 80%;
   min-height: 100px;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

#addcomment {
    resize: none;
    width: 80%;
    min-height: 80px;
    border: 1px solid hsl(223, 19%, 93%);
}

button {
    background-color: hsl(238, 40%, 52%);
    color: white;
    font-size: 12px;
    width: 70px;
    height: 30px;
    border: none;
}

button:hover {
    background-color: hsl(239, 57%, 85%);
    transition: 0.3s ease-in-out;
}

@media only screen and (max-width: 767px){ 
#newone {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
}

#newone img {
    width: 30px;
}

#comments {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: unset;
}
#text-area {
   width: 100%;
   min-height: 100px;
}

#addcomment {
    resize: none;
    width: 100%;
    min-height: 100px;
    border: 1px solid hsl(223, 19%, 93%);
}

}

</style>