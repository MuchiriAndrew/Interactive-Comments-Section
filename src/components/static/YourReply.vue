<template>

<!-- Modal -->
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered bg-white rounded-3" id="modal-container">
        <div class="modal-content" id="modal-content">
            <h3>Delete Comment</h3>
            <p>Are you sure you want to remove this comment? This will remove the comment and can't be undone</p>
            <div id="btn-div">
                <div id="cancel" class="rounded-2"  data-bs-dismiss="modal">NO, CANCEL</div>
                <div @click="handleDelete(reply)" id="yes-delete" class="rounded-2" data-bs-dismiss="modal">YES, DELETE</div>
            </div>
        </div>
    </div>
    </div>

        <transition name="comment-update">

            <ReplyUpdate :reply = 'reply' :data = 'data' v-if="clicked1" :clicked1 = 'clicked1' :handleUpdate = 'handleUpdate'/>


            <div id="comments" class="bg-white rounded-2 mb-2" v-else >
                    <div id="counter-div" class="order-2 order-md-1 d-none d-md-flex">
                    <div id="count" class="rounded-3">
                        <span @click="addScore(reply)" id="ops"><b>+</b></span>
                        <span id="number"><b>{{reply.score}}</b></span>
                        <span @click="subtractScore(reply)" id="ops"><b>-</b></span>
                    </div>

                    </div>

                    <div id="text-wrapper" class="pt-2 order-1 order-md-2">

                    <div id="comment-info">
                        <div id="first-info">
                        <img :src="userData.image" :alt="userData.username">
                        <h6 class="m-0"><b>{{userData.username}}</b></h6>
                        <span id="you-tag" class="rounded-1 px-2"><b>you</b></span>
                        <span>{{reply.timestamp}}</span>
                        </div>

                        <div class="d-none d-md-flex" id="second-info">
                            <div id="delete" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                <img src="../../assets/icon-delete.svg" alt="delete">
                                <p class="m-0">Delete</p>
                            </div>

                            <div @click="handleEdit" id="edit">
                                <img src="../../assets/icon-edit.svg" alt="delete">
                                <p class="m-0">Edit</p>
                            </div>
                        
                        </div>
                    </div>

                    <div id="comment-text" class="pt-2">
                        <p>{{reply.content}}</p>
                    </div>

                    </div>

                    <div class="d-flex d-md-none order-2" id="new-info">
                        
                            <div id="count" class="rounded-3">
                                <span @click="addScore(reply)" id="ops"><b>+</b></span>
                                <span id="number"><b>{{reply.score}}</b></span>
                                <span @click="subtractScore(reply)" id="ops"><b>-</b></span>
                            </div>

                            <div  id="second">
                                <div id="delete" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                <img src="../../assets/icon-delete.svg" alt="delete">
                                <p class="m-0">Delete</p>
                            </div>

                            <div @click="handleEdit" id="edit">
                                <img src="../../assets/icon-edit.svg" alt="delete">
                                <p class="m-0">Edit</p>
                            </div>

                            </div>    
                    </div>
            </div>


        </transition>
        

      
</template>

<script>
import ReplyUpdate from "../ReplyUpdate.vue"

export default {
    components: {ReplyUpdate},
    name: 'ReplyComponent',
    props: ['data','reply', 'comment'],
    data() {
    return {
      clicked1:false,
      showModal:false,
      userData:[],
    }
  },
  methods: {
    handleEdit(){
        this.clicked1 = !this.clicked1
    },
    handleUpdate() {
        this.clicked1 = !this.clicked1
    },

    addScore(reply) {
      reply.score++

      fetch(`http://localhost:3000/replies/${reply.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           score:reply.score
        }),
    })
    .catch(err => console.log(err))
    },

    subtractScore(reply) {
      if(reply.score > 0)  
     reply.score--

      fetch(`http://localhost:3000/replies/${reply.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           score:reply.score
        }),
    })
    .catch(err => console.log(err))
    },

    handleDelete(reply) {
        location.reload()
        fetch(`http://localhost:3000/replies/${reply.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        .catch(err => console.log(err))
    }
  },

  mounted() {
    const getUserData = async () => {
      const response = await fetch (`http://localhost:3000/users/${this.reply.user_id}`)
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
    width: 85%;
}


#first-info {
    min-width: 45%;
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

#modal-container {
    max-width: none;
    width:350px;
    min-height: 0px;
    height: 200px;
    padding: 17px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

#modal-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
}

#modal-content h3 {
    font-size: 24px;
}

#modal-content p {
    color: hsl(211, 10%, 45%);
}

#btn-div {
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

#cancel {
    background: hsl(240, 7%, 46%);
    width: 40%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
}
#cancel:hover {
    background: hsl(239, 57%, 85%);
    cursor: pointer;
}

#yes-delete {
    background: hsl(358, 79%, 66%);
    width: 40%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
}
#yes-delete:hover {
    background: hsl(357, 100%, 86%);
    cursor: pointer;
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