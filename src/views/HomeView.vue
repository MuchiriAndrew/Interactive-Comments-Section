<template>
  <div class="container-fluid" id="wrapper">
   <Suspense @pending = "pending" @fallback = "fallback" @resolve = "resolve">
      <template #default>
        <div id="comments-container">
          <Comments :commentData="commentData" :replyData="replyData" />
        </div>
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>


<script setup>
import { ref, onMounted, Suspense } from 'vue';
import Comments from "../components/static/Comments.vue"
import Loading from "../components/static/Loading.vue"

const commentData = ref([]);
const replyData = ref([]);

const pending = () => {
  console.log("pending");
}
const fallback = () => {
  console.log("fallback");
}
const resolved = () => {
  console.log("resolved");
}

const getData = async () => {
  const response = await fetch('https://owl-yd4u.onrender.com/comments');
  const data = await response.json();
  commentData.value = data;
};

const getReplies = async () => {
  const response = await fetch('https://owl-yd4u.onrender.com/replies');
  const data = await response.json();
  replyData.value = data;
};

onMounted(async () => {
  await Promise.all([getData(), getReplies()]);
});

</script>


<style>
@media only screen and (max-width: 1200px){
  #comments-container{
    width: 100%;
  }
}
</style>
