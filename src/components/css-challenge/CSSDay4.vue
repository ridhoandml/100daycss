<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="frame">
      <div class="center">
        <div class="circle">
          <div class="circle__one"></div>
          <div class="circle__two"></div>
          <div class="circle__three"></div>
          <div class="circle__four"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: static;
  width: 400px;
  height: 400px;
}

.frame {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #43a8d7;
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.circle {
  position: relative;
  height: 10rem;
  width: 10rem;
}

.circle__one,
.circle__two,
.circle__three,
.circle__four {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  box-shadow: 0.5rem 0.5rem 1rem #095a8da0;
  border-radius: 10rem;
}

.circle__one {
  z-index: 2;
  width: 8rem;
  height: 8rem;
  animation: circle-one 2.5s ease-in-out infinite alternate;
}

.circle__two {
  z-index: 3;
  width: 6rem;
  height: 6rem;
  animation: circle-two 2.5s ease-in-out infinite alternate;
}

.circle__three {
  z-index: 4;
  width: 4rem;
  height: 4rem;
  animation: circle-three 2.5s ease-in-out infinite alternate;
}

.circle__four {
  z-index: 5;
  width: 2rem;
  height: 2rem;
  animation: circle-four 2.5s ease-in-out infinite alternate;
}

@keyframes circle-one {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  40% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes circle-two {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  20% {
    transform: translate(-50%, -50%) scale(0);
  }
  60% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes circle-three {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  40% {
    transform: translate(-50%, -50%) scale(0);
  }
  80% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes circle-four {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  60% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
