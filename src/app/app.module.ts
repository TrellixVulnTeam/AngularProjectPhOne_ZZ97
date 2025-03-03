import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarInputComponent } from './search-bar/search-bar-input/search-bar-input.component';
import { HomeCardComponent } from './home/home-card/home-card.component';
import { HomeSingleCardComponent } from './home/home-card/home-single-card/home-single-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationcardComponent } from './home/notification/notificationcard/notificationcard.component';
import { NotificationSingleCardComponent } from './home/notification/notificationcard/notification-single-card/notification-single-card.component';
import { LoginServiceComponent } from './authorization/login-service/login-service.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ViewAnotherProfileComponent } from './another-profile/view-another-profile/view-another-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpServiceComponent } from './authorization/sign-up-service/sign-up-service.component';
import { ListOfMoviesComponent } from './available-movies/list-of-movies/list-of-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarInputComponent,
    HomeCardComponent,
    HomeSingleCardComponent,
    NotificationcardComponent,
    NotificationSingleCardComponent,
    LoginServiceComponent,
    ViewAnotherProfileComponent,
    SignUpServiceComponent,
    ListOfMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
