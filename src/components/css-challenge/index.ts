import { defineAsyncComponent } from "vue";
import SekeletonContainer from "@/components/css-challenge/SekeletonContainer.vue";

export const CSSDay1 = defineAsyncComponent({
  loader: () => import("@/components/css-challenge/CSSDay1.vue"),
  loadingComponent: SekeletonContainer,
});

export const CSSDay2 = defineAsyncComponent({
  loader: () => import("@/components/css-challenge/CSSDay2.vue"),
  loadingComponent: SekeletonContainer,
});

export const CSSDay3 = defineAsyncComponent({
  loader: () => import("@/components/css-challenge/CSSDay3.vue"),
  loadingComponent: SekeletonContainer,
});

export const CSSDay4 = defineAsyncComponent({
  loader: () => import("@/components/css-challenge/CSSDay4.vue"),
  loadingComponent: SekeletonContainer,
});

export const CSSDay5 = defineAsyncComponent({
  loader: () => import("@/components/css-challenge/CSSDay5.vue"),
  loadingComponent: SekeletonContainer,
});

export const CSSDay6 = defineAsyncComponent({
  loader: () => import("@/components/css-challenge/CSSDay6.vue"),
  loadingComponent: SekeletonContainer,
});

export const CSSDay7 = defineAsyncComponent({
  loader: () => import("@/components/css-challenge/CSSDay7.vue"),
  loadingComponent: SekeletonContainer,
});

export const CSSDay10 = defineAsyncComponent({
  loader: () => import("@/components/css-challenge/CSSDay10.vue"),
  loadingComponent: SekeletonContainer,
});

export const CSSDay12 = defineAsyncComponent({
  loader: () => import("@/components/css-challenge/CSSDay12.vue"),
  loadingComponent: SekeletonContainer,
});

export const CSSDay13 = defineAsyncComponent({
  loader: () => import("@/components/css-challenge/CSSDay13.vue"),
  loadingComponent: SekeletonContainer,
});
