import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-blank",
  template: `
    <p>
      {{ route.url | async }}
    </p>
  `,
  styles: [],
})
export class BlankPage {
  constructor(readonly route: ActivatedRoute) {}
}
