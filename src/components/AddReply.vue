<template>
  <div id="comments" class="bg-white rounded-2 mb-1 pt-3">

            <div id="image-div">
                <img src="../assets/avatars/image-juliusomo.png" alt="juliusomo">
            </div>

            <form id="text-area" class="">
                <textarea name="addcomment" id="addcomment" class="rounded-2 p-2" placeholder="Add a reply..."></textarea>
            </form>

            <button class="rounded-2">REPLY</button>
            
    </div>

</template>

<script>
export default {

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
    width: 65%;
   min-height: 100px;
}

#addcomment {
    resize: none;
    width: 100%;
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

</style>