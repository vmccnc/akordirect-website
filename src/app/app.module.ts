import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { ProjectComponent } from './components/project-list/project/project.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageDividerComponent } from './components/page-divider/page-divider.component';
import { ButtonComponent } from './components/button/button.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DescriptionCardComponent } from './components/description-card/description-card.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { FourthPageComponent } from './components/fourth-page/fourth-page.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { JoinUsPageComponent } from './components/join-us-page/join-us-page.component';
import { AutoCarouselComponent } from './components/auto-carousel/auto-carousel.component';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProjectComponent,
    ProjectListComponent,
    MainPageComponent,
    PageDividerComponent,
    ButtonComponent,
    FirstPageComponent,
    CarouselComponent,
    DescriptionCardComponent,
    SecondPageComponent,
    FourthPageComponent,
    ThirdPageComponent,
    ContactPageComponent,
    JoinUsPageComponent,
    AutoCarouselComponent,
    TechnologyCardComponent,
    TranslatePipe, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
