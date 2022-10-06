<script setup lang="ts">
import {
  CSSDay1,
  CSSDay2,
  CSSDay3,
  CSSDay4,
  CSSDay5,
  CSSDay6,
  CSSDay7,
  CSSDay10,
} from "@/components/css-challenge";
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
</script>

<template>
  <NavigationBar />
  <div class="grid">
    <div class="grid__item">
      <CSSDay1></CSSDay1>
      <div class="row">
        <p class="title">Day 1: <span>100 Days CSS</span></p>
        <a class="link-codepen" href="#">
          <i class="bx bxl-codepen"></i>
        </a>
      </div>
    </div>
    <div class="grid__item">
      <CSSDay2></CSSDay2>
      <div class="row">
        <p class="title">Day 2: <span>Menu Icon</span></p>
        <a class="link-codepen" href="#">
          <i class="bx bxl-codepen"></i>
        </a>
      </div>
    </div>
    <div class="grid__item">
      <CSSDay3></CSSDay3>
      <div class="row">
        <p class="title">Day 3: <span>The Pyramide</span></p>
        <a class="link-codepen" href="#">
          <i class="bx bxl-codepen"></i>
        </a>
      </div>
    </div>
    <div class="grid__item">
      <CSSDay4></CSSDay4>
      <div class="row">
        <p class="title">Day 4: <span>Loading</span></p>
        <a class="link-codepen" href="#">
          <i class="bx bxl-codepen"></i>
        </a>
      </div>
    </div>
    <div class="grid__item">
      <CSSDay5></CSSDay5>
      <div class="row">
        <p class="title">Day 5: <span>Statistic</span></p>
        <a class="link-codepen" href="#">
          <i class="bx bxl-codepen"></i>
        </a>
      </div>
    </div>
    <div class="grid__item">
      <CSSDay6></CSSDay6>
      <div class="row">
        <p class="title">Day 6: <span>Profile</span></p>
        <a class="link-codepen" href="#">
          <i class="bx bxl-codepen"></i>
        </a>
      </div>
    </div>
    <div class="grid__item">
      <CSSDay7></CSSDay7>
      <div class="row">
        <p class="title">Day 7: <span>Notifications, Search and Menu</span></p>
        <a class="link-codepen" href="#">
          <i class="bx bxl-codepen"></i>
        </a>
      </div>
    </div>
    <div class="grid__item">
      <CSSDay10></CSSDay10>
      <div class="row">
        <p class="title">Day 10: <span>Watch</span></p>
        <a class="link-codepen" href="#">
          <i class="bx bxl-codepen"></i>
        </a>
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  gap: 2rem;
  padding: 4rem 0;
}

@media only screen and (min-width: 900px) {
  .grid {
    grid-template-columns: auto auto;
  }
}

@media only screen and (min-width: 1200px) {
  .grid {
    grid-template-columns: auto auto auto;
  }
}

.grid__item {
  width: min-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 8px 8px 16px 0 #3341550f;
}

.row {
  padding: 1rem;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  color: #334155;
}

.title > span {
  font-weight: 700;
}

.link-codepen {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  overflow: hidden;
}

.link-codepen:hover {
  color: white;
}

.link-codepen::after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0ea5e9;
  height: 0;
  transition: height 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.link-codepen:hover::after {
  height: 2rem;
}

.link-codepen > i {
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: #0ea5e9;
  transition: color 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.link-codepen:hover > i {
  color: white;
}
</style>
