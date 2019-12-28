import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ShakespeerComponent } from './shakespeer/shakespeer.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER } from  'ngx-ui-loader';
import { ArInstructionsComponent } from './ar-instructions/ar-instructions.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'ar-instructions', component: ArInstructionsComponent
  },
  {
    path: 'shakespeer', component: ShakespeerComponent
  }
];

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsType: SPINNER.fadingCircle,
  bgsOpacity: 1.0,
  pbThickness: 0
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectsComponent,
    FooterComponent,
    AboutComponent,
    ModalComponent,
    ShakespeerComponent,
    ArInstructionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

