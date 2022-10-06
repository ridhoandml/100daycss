<script setup lang="ts">
import NavigationBar from "../layout/NavigationBar.vue";
import FooterBar from "../layout/FooterBar.vue";
import { defineAsyncComponent } from "vue";

const GridChallenge = defineAsyncComponent({
  loader: () => import(`@/layout/GridChallenge.vue`),
});
</script>

<template>
  <NavigationBar />
  <GridChallenge />
  <FooterBar />
</template>

<style scoped></style>
