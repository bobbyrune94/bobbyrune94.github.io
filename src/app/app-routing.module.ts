import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { PerformancesComponent } from './performances/performances.component';

import { WushuComponent } from './performancePages/wushuPages/wushu/wushu.component';
import { CollegiatesComponent } from './performancePages/wushuPages/collegiates/collegiates.component';
import { DemosComponent } from './performancePages/wushuPages/demos/demos.component';
import { UwgComponent } from './performancePages/wushuPages/uwg/uwg.component';

import { CheerleadingComponent } from './performancePages/cheerPages/cheerleading/cheerleading.component';
import { Cheer2013Component } from './performancePages/cheerPages/cheer2013/cheer2013.component';
import { Cheer2014Component } from './performancePages/cheerPages/cheer2014/cheer2014.component';
import { Cheer2015Component } from './performancePages/cheerPages/cheer2015/cheer2015.component';

import { ClassesComponent } from './projectPages/classes/classes.component';
import { HoohacksComponent } from './projectPages/hoohacks/hoohacks.component';
import { InternshipComponent } from './projectPages/internships/internship.component';
import { SgdGamesComponent } from './projectPages/sgdGames/sgd-games.component';

import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'performances', component: PerformancesComponent },
  { path: 'performances/wushu', component: WushuComponent },
  { path: 'performances/wushu/uwg', component: UwgComponent },
  { path: 'performances/wushu/collegiates', component: CollegiatesComponent },
  { path: 'performances/wushu/demos', component: DemosComponent },
  { path: 'performances/cheerleading', component: CheerleadingComponent },
  { path: 'performances/cheerleading/cheer2013', component: Cheer2013Component },
  { path: 'performances/cheerleading/cheer2014', component: Cheer2014Component },
  { path: 'performances/cheerleading/cheer2015', component: Cheer2015Component },
  { path: 'projects/classes', component: ClassesComponent },
  { path: 'projects/hoohacks', component: HoohacksComponent },
  { path: 'projects/internships', component: InternshipComponent },
  { path: 'projects/sgd', component: SgdGamesComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
