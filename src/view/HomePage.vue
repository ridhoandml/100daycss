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
</script>

<template>
  <div class="grid">
    <div class="grid__item">
      <CSSDay1></CSSDay1>
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
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  gap: 2rem;
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
