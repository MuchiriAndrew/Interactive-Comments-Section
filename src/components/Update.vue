  <template>
      <div id="comments" class="bg-white rounded-2 mb-2">
            <div id="counter-div" class="order-2 order-lg-1 d-none d-lg-flex">
            <div id="count" class="rounded-3">
                <span id="ops"><b>+</b></span>
                <span id="number"><b>2</b></span>
                <span id="ops"><b>-</b></span>
            </div>

            </div>

            <div id="text-wrapper" class="pt-2">

                <div id="comment-info">
                    <div id="first-info">
                    <img src="../assets/avatars/image-juliusomo.png" alt="juliusomo">
                    <h6 class="m-0"><b>juliusomo</b></h6>
                    <span id="you-tag" class="rounded-1 px-2"><b>you</b></span>
                    <span>2 days ago</span>
                    </div>

                    <div id="second-info" class="d-none d-lg-flex">
                        <div id="delete">
                            <img src="../assets/icon-delete.svg" alt="delete">
                            <p class="m-0">Delete</p>
                        </div>

                        <div id="edit">
                            <img src="../assets/icon-edit.svg" alt="delete">
                            <p class="m-0">Edit</p>
                        </div>
                    
                    </div>
                </div>

                <div id="update-text">
                     <form id="text-area" class="">
                    <textarea name="addcomment" id="addcomment" class="rounded-2 p-2" placeholder="Add a comment..."></textarea>
                    </form>

                    <button class="rounded-2">UPDATE</button>
                </div>

            </div>

           <div class="d-flex d-lg-none order-2" id="new-info">
                
                    <div id="count" class="rounded-3">
                        <span id="ops"><b>+</b></span>
                        <span id="number"><b>2</b></span>
                        <span id="ops"><b>-</b></span>
                    </div>

                    <div id="second">
                        <div id="delete">
                        <img src="../assets/icon-delete.svg" alt="delete">
                        <p class="m-0">Delete</p>
                    </div>

                    <div id="edit">
                        <img src="../assets/icon-edit.svg" alt="delete">
                        <p class="m-0">Edit</p>
                    </div>

                    </div>

                    
                
            </div>
      </div>

</template>

<script>
export default {

}
</script>

<style scoped>
#comments {
    width: 85%;
    min-height: 200px;

}

#first-info {
    min-width: 50%;
}

#text-wrapper {
  width: 90%;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  justify-content: space-around;
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

#update-text {
    width: 97%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

#text-area {
    width: 100%;
}

#addcomment {
    resize: none;
    width: 100%;
    min-height: 80px;
    border: 1px solid hsl(223, 19%, 93%);
}

button {
    background-color: hsl(238, 40%, 52%);
    border: none;
    width: 70px;
    height: 30px;
    color: white;
}


button:hover {
    background-color: hsl(239, 57%, 85%);
    transition: 0.3s ease-in-out;
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
  min-height: 190px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  justify-content: space-around;
}

#first-info {
  min-width: 80%;
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

#update-text {
    width: 100%;
    display: flex;
    height: 150px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
}

#text-area {
    width: 100%;
}

#addcomment {
    resize: none;
    width: 100%;
    min-height: 100px;
    border: 1px solid hsl(223, 19%, 93%);
}

button {
    background-color: hsl(238, 40%, 52%);
    border: none;
    width: 70px;
    height: 30px;
    color: white;
}


button:hover {
    background-color: hsl(239, 57%, 85%);
    transition: 0.3s ease-in-out;
}
}

</style>