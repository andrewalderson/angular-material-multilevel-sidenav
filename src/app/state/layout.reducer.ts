import { createReducer, on } from "@ngrx/store";
import * as LayoutActions from "./layout.actions";

export const layoutFeatureKey = "layout";

export interface State {
  showSidenav: boolean;
  isSmallScreen: boolean;
}

const initialState: State = {
  showSidenav: false,
  isSmallScreen: false,
};

export const reducer = createReducer(
  initialState,
  on(LayoutActions.closeSidenav, (state) => ({ ...state, showSidenav: false })),
  on(LayoutActions.openSidenav, (state) => ({ ...state, showSidenav: true })),
  on(LayoutActions.toggleSidenav, (state) => ({
    ...state,
    showSidenav: !state.showSidenav,
  })),
  on(LayoutActions.isSmallScreen, (state, { isSmallScreen }) => ({
    ...state,
    isSmallScreen,
  }))
);

export const selectShowSidenav = (state: State) => state.showSidenav;
export const selectIsSmallScreen = (state: State) => state.isSmallScreen;
