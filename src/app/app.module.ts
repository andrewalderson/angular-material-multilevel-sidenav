import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatNavigationRailModule } from "./components/navigation-rail";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BlankPage } from "./blank.page";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { DrawerNavigationItemComponent } from "./navigation/drawer-navigation-item.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { LayoutEffects } from "./state/layout.effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { metaReducers, ROOT_REDUCERS } from "./state";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [AppComponent, BlankPage, DrawerNavigationItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNavigationRailModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    CdkAccordionModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
    }),
    EffectsModule.forRoot([LayoutEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
