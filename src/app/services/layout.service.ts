import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injectable, OnDestroy } from "@angular/core";
import { map, Subject, takeUntil } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LayoutService implements OnDestroy {
  private _destroyed = new Subject<void>();

  get isSmallScreen() {
    return this._isSmallScreen;
  }
  private _isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        takeUntil(this._destroyed),
        map((result) => {
          this._isSmallScreen = result.matches;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
