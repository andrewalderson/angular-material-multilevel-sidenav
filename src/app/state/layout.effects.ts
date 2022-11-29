import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { createEffect } from "@ngrx/effects";
import { map } from "rxjs/operators";
import * as LayoutActions from "./layout.actions";

@Injectable()
export class LayoutEffects {
  isSmallScreen = createEffect(() =>
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map((result) =>
          LayoutActions.isSmallScreen({ isSmallScreen: result.matches })
        )
      )
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
