// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Component } from "@angular/core";
import { provideRouter, RouterModule } from "@angular/router";
import { Story, Meta } from "@storybook/angular";
import { NavigationRailModule } from "./navigation-rail.module";
import { MatIconModule } from "@angular/material/icon";
@Component({
  template: `<app-navigation-rail>
    <a app-navigation-rail-item routerLink="/">
      <mat-icon appNavigationRailItemIcon>home</mat-icon>
    </a>
    <a app-navigation-rail-item routerLink="/">
      <mat-icon appNavigationRailItemIcon>schedule</mat-icon>
      <span appNavigationRailItemLabel>Recent</span>
    </a>
    <a app-navigation-rail-item routerLink="/">
      <mat-icon appNavigationRailItemIcon>folder</mat-icon>
      <span appNavigationRailItemLabel>All Files</span>
    </a>
    <a app-navigation-rail-item routerLink="/">
      <mat-icon appNavigationRailItemIcon>image</mat-icon>
      <span appNavigationRailItemLabel>Images</span>
    </a>
  </app-navigation-rail>`,
  standalone: true,
  imports: [NavigationRailModule, RouterModule, MatIconModule],
  providers: [provideRouter([])],
})
class NavigationRailWrapperComponent {}

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: "Components/Navigation Rail",
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