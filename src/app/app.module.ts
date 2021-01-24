import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { BestWorksComponent } from './components/best-works/best-works.component';
import { BioComponent } from './components/bio/bio.component';
import { ContactComponent } from './components/contact/contact.component';
import { CaritoDaSilvaCVComponent } from './components/carito-da-silva-cv/carito-da-silva-cv.component';
import { ResumeComponent } from './components/resume/resume.component';

//Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MenuButtonComponent } from './shared/menu-button/menu-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BestWorksComponent,
    BioComponent,
    ContactComponent,
    ResumeComponent,
    MenuButtonComponent,
    CaritoDaSilvaCVComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
