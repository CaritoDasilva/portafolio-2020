import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BestWorksComponent } from './components/best-works/best-works.component';
import { BioComponent } from './components/bio/bio.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'favorites-codes', component: BestWorksComponent },
  { path: 'bio', component: BioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
