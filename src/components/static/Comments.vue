<template>
<div id="comments" class="bg-light rounded-2 mb-2">
        <div id="counter-div" >
          <div id="count" class="rounded-3">
            <span id="ops"><b>+</b></span>
            <span id="number"><b>12</b></span>
            <span id="ops"><b>-</b></span>
          </div>

        </div>
        <div id="text-wrapper" class="pt-2">

          <div id="comment-info">
            <div id="first-info">
              <img src="../../assets/avatars/image-amyrobson.png" alt="amyrobson">
              <h6 class="m-0"><b>amyrobson</b></h6>
              <span>1 month ago</span>
            </div>

            <div id="second-info">
              <img src="../../assets/icon-reply.svg" alt="reply">
              <p class="m-0">Reply</p>
            </div>
            
          </div>

          <div id="comment-text" class="pt-2">
            <p>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p>
          </div>

        </div>
      </div>

      <div id="comments" class="bg-light rounded-2 mb-2">
        <div id="counter-div" >
          <div id="count" class="rounded-3">
            <span id="ops"><b>+</b></span>
            <span id="number"><b>5</b></span>
            <span id="ops"><b>-</b></span>
          </div>

        </div>
        <div id="text-wrapper" class="pt-2">

          <div id="comment-info">
            <div id="first-info">
              <img src="../../assets/avatars/image-maxblagun.png" alt="maxblagun">
              <h6 class="m-0"><b>maxblagun</b></h6>
              <span>2 weeks ago</span>
            </div>

            <div id="second-info">
              <img src="../../assets/icon-reply.svg" alt="reply">
              <p class="m-0">Reply</p>
            </div>
            
          </div>

          <div id="comment-text" class="pt-2">
            <p>Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!</p>
          </div>

        </div>
      </div>
  
</template>

<script>
export default {

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

</style>