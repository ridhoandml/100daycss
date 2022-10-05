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
  CSSDay12,
  CSSDay13,
} from "@/components/css-challenge";
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
</script>

<template>
  <NavigationBar />
  <div class="grid">
    <div class="grid__item">
      <CSSDay1></CSSDay1>
      <p>WKWKWK</p>
    </div>
    <div class="grid__item">
      <CSSDay2></CSSDay2>
    </div>
    <div class="grid__item">
      <CSSDay3></CSSDay3>
    </div>
    <div class="grid__item">
      <CSSDay4></CSSDay4>
    </div>
    <div class="grid__item">
      <CSSDay5></CSSDay5>
    </div>
    <div class="grid__item">
      <CSSDay6></CSSDay6>
    </div>
    <div class="grid__item">
      <CSSDay7></CSSDay7>
    </div>
    <div class="grid__item">
      <CSSDay10></CSSDay10>
    </div>
    <div class="grid__item">
      <CSSDay12></CSSDay12>
    </div>
    <div class="grid__item">
      <CSSDay13></CSSDay13>
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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
