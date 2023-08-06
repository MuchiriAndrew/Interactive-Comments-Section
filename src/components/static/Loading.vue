<template>
  <div class="loading">
    <div class="spinner"></div>
  </div>
</template>

<style>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 250px;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}
</style>
