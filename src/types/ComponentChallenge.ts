import type { Component } from "vue";

export interface ComponentChallenge {
  day: number;
  name: string;
  link: string | null;
  componentName?: string;
  component?: Component;
}
