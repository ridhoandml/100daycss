import type { Component } from "vue";

export interface ComponentChallenge {
  day: number;
  name: string;
  link?: string;
  componentName?: string;
  component?: Component;
}
