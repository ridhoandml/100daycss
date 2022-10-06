<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const getTime = () => {
    let today = new Date();
    const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

    const months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];

    let day = weekdays[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];
    let year = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    document.getElementById(
      "date"
    )!.innerHTML = `${day}, ${date} ${month} ${year}`;
    document.getElementById("time")!.innerHTML = `${hour}:${minute}:${second}`;

    setTimeout(getTime, 1000);
  };

  const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const heartTime = () => {
    let heart = randomInt(80, 90);
    document.getElementById("heart")!.innerHTML = `${heart}` ?? `80`;

    setTimeout(heartTime, 3000);
  };

  const calories = () => {
    let calorie = randomInt(900, 1100);
    document.getElementById("calories")!.innerHTML =
      `${calorie} Kcal` ?? `920 Kcal`;

    setTimeout(calories, 1000);
  };

  heartTime();
  getTime();
  calories();
});
</script>

<template>
  <div class="container">
    <div class="frame">
      <div class="center">
        <div class="watch">
          <div class="content">
            <p id="date"></p>
            <h1 id="time"></h1>
            <div class="column">
              <div class="item">
                <span class="material-symbols-outlined"> monitor_heart </span>
                <span id="heart"></span>
              </div>
              <span id="calories"></span>
            </div>
          </div>
          <svg class="ornament">
            <circle class="spinner" cx="120" cy="120" r="118" />
            <circle class="dots" cx="120" cy="120" r="104" />
          </svg>
        </div>
        <div class="watch__line"></div>
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
  background: #87abcb;
  color: #333;
  font-family: "Plus Jakarta Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.watch__line {
  position: absolute;
  z-index: 1;
  top: -30%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 8rem;
  height: 28rem;
  background-color: #284864;
}

.watch {
  position: relative;
  z-index: 5;
  width: 16rem;
  height: 16rem;
  background: #284864;
  outline: 0.5rem solid #557897;
  border-radius: 50%;
}

.content {
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  flex-direction: column;
  width: 8.5rem;
  text-transform: capitalize;
}

.content > p {
  font-size: 0.875rem;
  text-align: center;
}

.content > h1 {
  font-size: 1.75rem;
  text-align: center;
  margin: 0.25rem;
}

.column {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.column > span,
.item > span {
  font-size: 0.75rem;
}

.column > .item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.ornament {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15rem;
  height: 15rem;
}

.spinner {
  fill-opacity: 0;
  stroke-width: 2px;
  stroke: #ffffff50;
  stroke-dasharray: 750;
  stroke-dashoffset: 750;
  transform-origin: center;
  transform: rotate(-90deg);
  animation: spin 1s linear forwards infinite;
}

@keyframes spin {
  to {
    stroke-dashoffset: 0;
  }
}
.dots {
  fill-opacity: 0;
  stroke: white;
  stroke-width: 2px;
  stroke-dasharray: 2 10.1;
}
</style>
