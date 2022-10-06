<template>
  <div class="skeleton"></div>
</template>

<style scoped>
.skeleton {
  position: static;
  width: 400px;
  height: 400px;
  background-color: #cecfcf;
  animation: skeleton-loading 1s ease-in-out infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-position: 0% 50%;
    background: #cecfcf;
  }
  100% {
    background-position: 0% 50%;
    background: #f0f3f5;
  }
}
</style>
