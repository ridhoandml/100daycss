<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="frame">
      <div class="center">
        <div class="circle">
          <div class="sky"></div>
          <div class="sun"></div>
          <div class="pyramid-left"></div>
          <div class="pyramid-right"></div>
          <div class="shadow"></div>
          <div class="grass"></div>
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
  background: #515151;
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
  width: 12rem;
  height: 12rem;
  background-color: white;
  clip-path: ellipse();
  animation: circle 4s ease-in-out infinite;
}

.sky {
  position: absolute;
  z-index: 1;
  top: 0;
  height: 9rem;
  width: 100%;
  animation: sky 4s ease-in-out infinite;
}

.grass {
  position: absolute;
  z-index: 2;
  bottom: 0;
  background-color: #f0de75;
  width: 100%;
  height: 3rem;
}

.pyramid-left {
  position: absolute;
  z-index: 4;
  bottom: 3rem;
  left: 20%;
  height: 4rem;
  width: 4rem;
  clip-path: polygon(0% 100%, 90% 100%, 100% 20%);
  animation: pyramid-left 4s ease-in-out infinite;
}

.pyramid-right {
  position: absolute;
  z-index: 3;
  bottom: 3rem;
  right: 20%;
  height: 4rem;
  width: 4rem;
  background-color: #dddada;
  clip-path: polygon(0% 100%, 100% 100%, 20% 20%);
  animation: pyramid-right 4s ease-in-out infinite;
}

.sun {
  position: absolute;
  z-index: 10;
  top: 8px;
  left: 40%;
  width: 2.5rem;
  height: 2.5rem;
  clip-path: ellipse();
  transform-origin: 50% 400%;
  animation: sun-move 4s ease-in-out infinite;
}

.shadow {
  position: absolute;
  z-index: 3;
  bottom: 0;
  height: 3rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  animation: shadow 4s ease-in-out infinite;
}

@keyframes sky {
  0% {
    background-color: #7be0fe;
  }

  30% {
    background-color: #4ebee0;
  }

  50% {
    background-color: #4ebee0;
  }

  100% {
    background-color: #7be0fe;
  }
}

@keyframes sun-move {
  0% {
    transform: rotate(-70deg);
    background-color: #ffef00;
  }

  30% {
    transform: rotate(-30deg);
  }

  50% {
    background-color: #ffef00;
  }

  100% {
    transform: rotate(70deg);
    background-color: #ff8c00;
  }
}

@keyframes pyramid-left {
  0% {
    background-color: #cccccc;
  }

  30% {
    background-color: #ffffff;
  }

  100% {
    background-color: #cccccc;
  }
}

@keyframes pyramid-right {
  0% {
    background-color: #ffffff;
  }

  30% {
    background-color: #cccccc;
  }

  100% {
    background-color: #ffffff;
  }
}

@keyframes shadow {
  0% {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%);
  }

  30% {
    clip-path: polygon(20% 0%, 80% 0%, 80% 50%);
  }

  100% {
    clip-path: polygon(20% 0%, 80% 0%, 0% 20%);
  }
}

@keyframes circle {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
