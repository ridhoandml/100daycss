<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const button = document.getElementById("button");
  const lineTop = document.getElementById("lineTop");
  const lineCenter = document.getElementById("lineCenter");
  const lineBottom = document.getElementById("lineBottom");

  button!.addEventListener("click", () => {
    lineTop!.classList.toggle("top-active");
    lineCenter!.classList.toggle("center-active");
    lineBottom!.classList.toggle("bottom-active");
  });
});
</script>

<template>
  <div class="container">
    <div class="frame">
      <div class="center">
        <div class="button" id="button">
          <div class="line line__top" id="lineTop"></div>
          <div class="line line__center" id="lineCenter"></div>
          <div class="line line__bottom" id="lineBottom"></div>
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
  background: #3492eb;
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

.button {
  position: relative;
  width: 8rem;
  height: 5.5rem;
  cursor: pointer;
}

.line {
  width: 8rem;
  height: 0.75rem;
  background-color: white;
  border-radius: 5rem;
  box-shadow: 0 0 12px #00000050;
  position: absolute;
}

.line__top {
  top: 0;
  animation: line__top-before 0.7s ease-in-out forwards;
}
.top-active {
  animation: line__top-after 0.7s ease-in-out forwards;
}

.line__center {
  top: 50%;
  animation: line__center-before 0.7s ease-in-out forwards;
}

.center-active {
  animation: line__center-after 0.7s ease-in-out forwards;
}

.line__bottom {
  bottom: 0;
  animation: line__bottom-before 0.7s ease-in-out forwards;
}

.bottom-active {
  animation: line__bottom-after 0.7s ease-in-out forwards;
}

@keyframes line__top-before {
  0% {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  50% {
    top: 50%;
    transform: translateY(-50%) rotate(0);
  }
  100% {
    top: 0;
    transform: translateY(0%) rotate(0);
  }
}

@keyframes line__top-after {
  0% {
    top: 0;
    transform: translateY(0%) rotate(0);
  }
  50% {
    top: 50%;
    transform: translateY(-50%) rotate(0);
  }
  100% {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
}

@keyframes line__center-before {
  0% {
    transform: translateY(-50%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
}

@keyframes line__center-after {
  0% {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-50%) scale(0);
    opacity: 0;
  }
}

@keyframes line__bottom-before {
  0% {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }
  50% {
    bottom: 50%;
    transform: translateY(50%) rotate(0);
  }
  100% {
    bottom: 0;
    transform: translateY(0%) rotate(0);
  }
}

@keyframes line__bottom-after {
  0% {
    bottom: 0;
    transform: translateY(0%) rotate(0);
  }
  50% {
    bottom: 50%;
    transform: translateY(50%) rotate(0);
  }
  100% {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }
}
</style>
