<template>
  <div id="comments" class="bg-white rounded-2 mb-1 pt-3">

            <div id="image-div" class="d-none d-md-block">
                <img class="rounded-circle" :src="userData.image" :alt="userData.name">
            </div>

            <form id="text-area" class="" @submit.prevent="handleSendReply">
                <textarea v-model="text" name="addcomment" id="addcomment" class="rounded-2 p-2" placeholder="Add a comment" ></textarea>
                <button class="rounded-2 d-none d-md-block">REPLY</button>
            </form>



            <div id="newone" class="d-flex d-md-none">
                <div id="image-div">
                    <img class="rounded-circle" :src="userData.image" :alt="userData.name">
                </div>

                <form @submit.prevent="handleSendReply">
                    <button class="rounded-2">SEND</button>
                </form>

            </div>

    </div>

</template>

<script>
import axios from 'axios';
export default {
    props: ['comment', 'reply', 'id'],
    data(){
        return{
            text:"",
            currentUser:[],
            userData:[],
            timestamp:null
        }
    },

    methods: {
        async handleSendReply() {
        const response = await axios.get("https://timezoneapi.io/api/timezone/?Africa/Nairobi&token=aJilxRoLpzKyPOntwmWQ")
        this.timestamp = await `${response.data.data.datetime.date_time_txt}`;
        console.log(this.timestamp);

            const newReply = {
                score: 0,
                user_id:this.id,
                content: this.text,
                parent_comment_id:this.comment.user_id,
                timestamp: this.timestamp
        };

    fetch('https://owl-yd4u.onrender.com/replies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReply),
    })
    .catch(err => console.log(err))
    console.log("reply post success")
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
}

#image-div{
    width: max-content;
    height: 100%;
}

#image-div img {
    width: 40px;
}

#text-area {
    width: 85%;
    height: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
}

#addcomment {
    resize: none;
    width: 80%;
    min-height: 80px;
    border: 1px solid hsl(223, 19%, 93%);
    font-size: 13px;
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
    min-height: 80px;
    border: 1px solid hsl(223, 19%, 93%);
}

}

</style>
