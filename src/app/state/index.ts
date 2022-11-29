import { InjectionToken } from "@angular/core";
import {
  ActionReducerMap,
  Action,
  ActionReducer,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { environment } from "src/environments/environment";
import * as fromLayout from "./layout.reducer";

export interface State {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>("Root reducers token", {
  factory: () => ({
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
  }),
});

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log("prev state", state);
    console.log("action", action);
    console.log("next state", result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

export const selectLayoutState = createFeatureSelector<fromLayout.State>(
  fromLayout.layoutFeatureKey
);

export const selectShowSidenav = createSelector(
  selectLayoutState,
  fromLayout.selectShowSidenav
);

export const selectIsSmallScreen = createSelector(
  selectLayoutState,
  fromLayout.selectIsSmallScreen
);
