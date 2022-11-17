// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Component } from "@angular/core";
import { provideRouter, RouterModule } from "@angular/router";
import { Story, Meta } from "@storybook/angular";
import { MatNavigationRailModule } from "./module";
import { MatIconModule } from "@angular/material/icon";
@Component({
  template: `<mat-navigation-rail>
    <a mat-navigation-rail-item routerLink="/">
      <mat-icon matNavigationRailItemIcon>home</mat-icon>
    </a>
    <a mat-navigation-rail-item routerLink="/">
      <mat-icon matNavigationRailItemIcon>schedule</mat-icon>
      <span matNavigationRailItemLabel>Recent</span>
    </a>
    <a mat-navigation-rail-item routerLink="/">
      <mat-icon matNavigationRailItemIcon>folder</mat-icon>
      <span matNavigationRailItemLabel>All Files</span>
    </a>
    <a mat-navigation-rail-item routerLink="/">
      <mat-icon matNavigationRailItemIcon>image</mat-icon>
      <span matNavigationRailItemLabel>Images</span>
    </a>
  </mat-navigation-rail>`,
  standalone: true,
  imports: [MatNavigationRailModule, RouterModule, MatIconModule],
  providers: [provideRouter([])],
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
    `,
  ],
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
  parameters: {
    layout: "fullscreen",
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
