import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';

const routes: Routes = [
  { path: '#main', component: MainPageComponent },
  { path: '#contacts', component: ContactPageComponent },
  { path: '#projects', component: ProjectListComponent },
  { path: '#services', component: ThirdPageComponent },



];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
