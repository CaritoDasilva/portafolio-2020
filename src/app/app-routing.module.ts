import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BestWorksComponent } from './components/best-works/best-works.component';
import { BioComponent } from './components/bio/bio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CaritoDaSilvaCVComponent } from './components/carito-da-silva-cv/carito-da-silva-cv.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorites-codes', component: BestWorksComponent },
  { path: 'bio', component: BioComponent },
  { path: 'conversemos', component: ContactComponent },
  { path: 'cvCaritoDaSilva', component: ResumeComponent },
  { path: 'CaritoDaSilvaCV', component: CaritoDaSilvaCVComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
