<template>
       <div v-if="showReply" id="comments" class="bg-light rounded-2 mb-1">
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
                <img src="../assets/avatars/image-amyrobson.png" alt="amyrobson">
                <h6 class="m-0"><b>amyrobson</b></h6>
                <span>1 month ago</span>
                </div>

                <div id="second-info">
                <img src="../assets/icon-reply.svg" alt="reply">
                <p class="m-0">Reply</p>
                </div>
                
            </div>

            <div id="comment-text" class="pt-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quidem eum quis, minus, consectetur ab ad sit laudantium unde magnam consequuntur. Soluta nihil, provident maxime debitis quod exercitationem, rem et, reiciendis error suscipit facilis? Minima quidem quos qui vero labore optio maiores, expedita deleniti illo aliquid sunt id doloribus nostrum.</p>
            </div>

            </div>
      </div>

</template>

<script>
export default {
    props:['showReply',' handleReply']
}
</script>

<style scoped>
#comments {
    width: 85%;
}

#first-info {
    min-width: 45%;
}

</style>