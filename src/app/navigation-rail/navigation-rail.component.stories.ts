// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Component } from "@angular/core";
import { provideRouter, RouterModule } from "@angular/router";
import { Story, Meta } from "@storybook/angular";
import { NavigationRailModule } from "./navigation-rail.module";

@Component({
  template: `<app-navigation-rail>
    <a app-navigation-rail-item routerLink="/">Test</a>
  </app-navigation-rail>`,
  standalone: true,
  imports: [NavigationRailModule, RouterModule],
  providers: [provideRouter([])],
})
class NavigationRailWrapperComponent {}

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: "Navigation Rail",
  component: NavigationRailWrapperComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NavigationRailWrapperComponent> = (
  args: NavigationRailWrapperComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {};
