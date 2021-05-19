import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemingService } from './theming.service';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ShowcaseSectionComponent } from './showcase-section/showcase-section.component';
import { TestComponent } from './test/test.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'test', component: TestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    ShowcaseSectionComponent,
    TestComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      // Provide the APP_INITIALIZER, wait until the theming configuration is fetched and set up correctly
      useFactory: (themingService: ThemingService) => () => themingService.initialize(),
      deps: [ThemingService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
