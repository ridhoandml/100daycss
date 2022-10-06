import { defineAsyncComponent, type Component } from "vue";
import ItemChallengeSkeleton from "@/components/skeleton/ItemChallengeSkeleton.vue";
import ItemChallengeError from "@/components/skeleton/ItemChallengeError.vue";
import json from "@/data/list-challenge.json";
import type { ComponentChallenge } from "@/types/ComponentChallenge";

export const useComponentChallenge = () => {
  const components: ComponentChallenge[] = [];

  json.data.forEach((item) => {
    const component: Component = defineAsyncComponent({
      loader: () => import(`@/components/css-challenge/${item.component}.vue`),
      loadingComponent: ItemChallengeSkeleton,
      errorComponent: ItemChallengeError,
    });

    components.push({
      day: item.day,
      name: item.name,
      link: item.link,
      componentName: item.component,
      component: component,
    });
  });

  return { components };
};
