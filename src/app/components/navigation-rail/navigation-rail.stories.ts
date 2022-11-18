// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Component, NgModule } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { MatNavigationRailModule } from "./module";
import { MatIconModule } from "@angular/material/icon";

@Component({
  template: ``,
})
class DummyComponent {}

@Component({
  template: `<mat-navigation-rail>
    <a
      mat-navigation-rail-item
      routerLink="/home"
      #home="routerLinkActive"
      [active]="home.isActive"
      routerLinkActive
    >
      <mat-icon matNavigationRailItemIcon>home</mat-icon>
    </a>
    <a
      mat-navigation-rail-item
      routerLink="/recent"
      #recent="routerLinkActive"
      [active]="recent.isActive"
      routerLinkActive
    >
      <mat-icon matNavigationRailItemIcon>schedule</mat-icon>
      <span matNavigationRailItemLabel>Recent</span>
    </a>
    <a
      mat-navigation-rail-item
      routerLink="/files"
      #files="routerLinkActive"
      [active]="files.isActive"
      routerLinkActive
    >
      <mat-icon matNavigationRailItemIcon>folder</mat-icon>
      <span matNavigationRailItemLabel>All Files</span>
    </a>
    <a
      mat-navigation-rail-item
      routerLink="/images"
      #images="routerLinkActive"
      [active]="images.isActive"
      routerLinkActive
    >
      <mat-icon matNavigationRailItemIcon>image</mat-icon>
      <span matNavigationRailItemLabel>Images</span>
    </a>
  </mat-navigation-rail>`,
})
class NavigationRailWrapperComponent {}

@NgModule({
  imports: [
    MatNavigationRailModule,
    MatIconModule,
    RouterTestingModule.withRoutes([
      { path: "home", component: DummyComponent },
      { path: "recent", component: DummyComponent },
      { path: "files", component: DummyComponent },
      { path: "images", component: DummyComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
    ]),
  ],
  declarations: [NavigationRailWrapperComponent, DummyComponent],
})
class TestModule {}

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
  decorators: [
    moduleMetadata({
      imports: [TestModule],
    }),
  ],
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
