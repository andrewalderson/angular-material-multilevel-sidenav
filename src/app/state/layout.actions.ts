import { createAction, props } from "@ngrx/store";

export const isSmallScreen = createAction(
  "[Layout] Is Small Screen",
  props<{ isSmallScreen: boolean }>()
);
export const openSidenav = createAction("[Layout] Open Sidenav");
export const closeSidenav = createAction("[Layout] Close Sidenav");
export const toggleSidenav = createAction("[Layout] Toggle Sidenav");
