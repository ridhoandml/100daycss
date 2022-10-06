<script setup lang="ts">
import { useComponentChallenge } from "@/composables/UseComponentChallenge";
import ItemChallenge from "../components/ItemChallenge.vue";

const { components } = useComponentChallenge();
</script>

<template>
  <div class="grid">
    <div
      class="grid__item"
      v-for="component in components"
      :key="component.componentName"
    >
      <ItemChallenge
        :component="component.component"
        :name="component.name"
        :link="component.link"
        :day="component.day"
      />
    </div>
  </div>
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
</style>
