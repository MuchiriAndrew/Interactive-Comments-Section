<template>
  <div id="comments" class="bg-white rounded-2 mb-1 pt-3">

            <div id="image-div" class="d-none d-md-block">
                <img class="rounded-circle" :src="userData.image" :alt="userData.name">
            </div>

            <form @submit.prevent="handleSend" id="text-area" class="">
                <textarea v-model="commentText" name="addcomment" id="addcomment" class="rounded-2 p-2" placeholder="Add a comment..."></textarea>
                <button class="rounded-2 d-none d-md-block">SEND</button>
            </form>


            <div id="newone" class="d-flex d-md-none">
                <div id="image-div">
                    <img class="rounded-circle" :src="userData.image" :alt="userData.name">
                </div>
                    <form @submit.prevent="handleSend">
                        <button  class="rounded-2">SEND</button>
                    </form>

            </div>

    </div>

</template>

<script>
import axios from 'axios';
export default {
    props:['id'],
    data() {
        return {
            commentText: null,
            userData: [],
            userData:[],
            timestamp:null
        }
    },

    methods: {
    async handleSend() {
        const response = await axios.get("https://timezoneapi.io/api/timezone/?Africa/Nairobi&token=aJilxRoLpzKyPOntwmWQ")
        this.timestamp = await `${response.data.data.datetime.date_time_txt}`;
        console.log(this.timestamp);

        const newComment = {
            user_id:this.id,
            content: this.commentText,
            score: 0,
            parent_comment_id: 5,
            timestamp: this.timestamp,
        };

        fetch('https://owl-yd4u.onrender.com/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment),
        })
        .catch(err => console.log(err))
        console.log("push reached")

    setTimeout(function(){ location.reload(); }, 1000);
    }
    },

    mounted() {

    const getUserData = async () => {
      const response = await fetch (`https://owl-yd4u.onrender.com/users/${this.id}`)
      const data = await response.json()
      this.userData = data
    }
    getUserData()
    .then(data=> console.log('user data found'))
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
