<script setup lang="ts">
import type { Component } from "vue";

const props = defineProps<{
  day: number;
  name: string;
  link: string | null;
  component?: Component;
}>();
</script>

<template>
  <div>
    <component :is="props.component" :key="day"></component>
    <div class="row">
      <p class="title">
        Day {{ props.day }}: <span>{{ props.name }}</span>
      </p>
      <a
        v-if="props.link != null"
        class="link-codepen"
        :href="props.link"
        target="_blank"
      >
        <i class="bx bxl-codepen"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
.row {
  height: 4rem;
  padding: 0 1rem;
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
