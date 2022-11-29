export interface NavigationItem {
  label: string;
  icon?: string;
  link: string;
  children?: NavigationItem[];
  isExternal?: boolean;
  exactMatch?: boolean;
}

export const navigation = [
  {
    label: "Home",
    icon: "home",
    link: "",
    exactMatch: true,
  },
  {
    label: "Get Started",
    icon: "apps",
    link: "/get-started",
  },
  {
    label: "Develop",
    icon: "code",
    link: "/develop",
    children: [
      {
        label: "Develop Overview",
        link: "/develop",
        exactMatch: true,
      },
      {
        label: "Android",
        link: "/develop/android",
        children: [
          {
            label: "MDC-Android",
            link: "/develop/android/mdc-android",
          },
          {
            label: "Jetpack Compose",
            link: "/develop/android/jetpack-compose",
          },
        ],
      },
      {
        label: "Flutter",
        link: "/develop/flutter",
      },
      {
        label: "Web",
        link: "/develop/web",
      },
    ],
  },
  {
    label: "Foundations",
    icon: "book",
    link: "/foundations",
    children: [
      {
        label: "Foundations Overview",
        link: "/foundations",
        exactMatch: true,
      },
      {
        label: "Accessibility",
        link: "/foundations/accessibility",
      },
      {
        label: "Adaptive Design",
        link: "/foundations/adaptive-design",
        children: [
          {
            label: "Overview",
            link: "/foundations/adaptive-design/overview",
          },
          {
            label: "Design for large screens",
            link: "/foundations/adaptive-design/large-screens/overview",
          },
          {
            label: "Canonical layouts",
            link: "/foundations/adaptive-design/canonical-layouts",
          },
          {
            label: "Foldable devices",
            link: "/foundations/adaptive-design/foldables/overview",
          },
        ],
      },
      {
        label: "Customizing Material",
        link: "/foundations/customization",
      },
      {
        label: "Design Token",
        link: "/foundations/design-tokens",
      },
      {
        label: "Interaction States",
        link: "/foundations/interaction-states",
      },
      {
        label: "Material A-Z",
        link: "/foundations/glossary",
      },
    ],
  },
  {
    label: "Styles",
    icon: "palette",
    link: "/styles",
    children: [
      {
        label: "Styles overview",
        link: "/styles",
        exactMatch: true,
      },
      {
        label: "Color",
        link: "/styles/color",
        children: [
          {
            label: "Overview",
            link: "/styles/color/overview",
          },
          {
            label: "Color system",
            link: "/styles/color/the-color-system",
          },
          {
            label: "Dynamic color",
            link: "/styles/color/dynamic-color",
          },
        ],
      },
      {
        label: "Elevation",
        link: "/styles/elevation",
      },
      {
        label: "Icons",
        link: "/styles/icons",
      },
      {
        label: "Motion",
        link: "/styles/motion",
        children: [
          {
            label: "Overview",
            link: "/styles/motion/overview",
          },
          {
            label: "Easing and duration",
            link: "/styles/motion/easing-and-duration",
          },
          {
            label: "Transitions",
            link: "/styles/motion/transitions",
          },
        ],
      },
      {
        label: "Shape",
        link: "/styles/shape",
      },
      {
        label: "Typography",
        link: "/styles/typography",
      },
    ],
  },
  {
    label: "Components",
    icon: "add_circle",
    link: "/components",
    children: [
      {
        label: "Components overview",
        link: "/components",
        exactMatch: true,
      },
      {
        label: "Badges",
        link: "/components/badges",
      },
      {
        label: "Bottom app bar",
        link: "/components/bottom-app-bar",
      },
      {
        label: "Bottom sheets",
        link: "/components/bottom-sheets",
      },
      {
        label: "Buttons",
        link: "/components/buttons",
        children: [
          {
            label: "All buttons",
            link: "/components/buttons/all-buttons",
          },
          {
            label: "Common buttons",
            link: "/components/buttons/buttons",
          },
          {
            label: "FAB",
            link: "/components/buttons/floating-action-button",
          },
          {
            label: "Extended FAB",
            link: "/components/buttons/extended-fab",
          },
          {
            label: "Icon buttons",
            link: "/components/buttons/icon-buttons",
          },
          {
            label: "Segmented buttons",
            link: "/components/buttons/segmented-buttons",
          },
        ],
      },
      {
        label: "Cards",
        link: "/components/cards",
      },
      {
        label: "Checkbox",
        link: "/components/checkbox",
      },
      {
        label: "Chips",
        link: "/components/chips",
      },
      {
        label: "Date pickers",
        link: "/components/date-pickers",
      },
      {
        label: "Dialogs",
        link: "/components/dialogs",
      },
      {
        label: "Divider",
        link: "/components/divider",
      },
      {
        label: "Lists",
        link: "/components/lists",
      },
      {
        label: "Menus",
        link: "/components/menus",
      },
      {
        label: "Navigation bar",
        link: "/components/navigation-bar",
      },
      {
        label: "Navigation drawer",
        link: "/components/navigation-drawer",
      },
      {
        label: "Navigation rail",
        link: "/components/navigation-rail",
      },
      {
        label: "Progress indicators",
        link: "/components/progress-indicators",
      },
      {
        label: "Radio button",
        link: "/components/radio-button",
      },
      {
        label: "Sliders",
        link: "/components/sliders",
      },
      {
        label: "Snackbar",
        link: "/components/snackbar",
      },
      {
        label: "Switch",
        link: "/components/switch",
      },
      {
        label: "Tabs",
        link: "/components/tabs",
      },
      {
        label: "Text fields",
        link: "/components/text-fields",
      },
      {
        label: "Time pickers",
        link: "/components/time-pickers",
      },
      {
        label: "Top app bar",
        link: "/components/top-app-bar",
      },
    ],
  },
  {
    label: "Blog",
    icon: "pages",
    link: "http://material.io/blog",
    isExternal: true,
  },
];
