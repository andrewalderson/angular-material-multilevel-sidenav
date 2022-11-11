// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { NavigationRailComponent } from "./navigation-rail.component";
import { NavigationRailModule } from "./navigation-rail.module";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: "Navigation Rail",
  component: NavigationRailComponent,
  decorators: [
    moduleMetadata({
      imports: [NavigationRailModule],
    }),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NavigationRailComponent> = (
  args: NavigationRailComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {};
