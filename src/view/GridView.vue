<script setup lang="ts">
import CSSDay1 from "@/components/CSSDay1.vue";
import CSSDay2 from "@/components/CSSDay2.vue";
import CSSDay3 from "@/components/CSSDay3.vue";
import CSSDay4 from "@/components/CSSDay4.vue";
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
