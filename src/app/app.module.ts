import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { PerformancesComponent } from './performances/performances.component';
import { WushuComponent } from './performancePages/wushuPages/wushu/wushu.component';
import { UwgComponent } from './performancePages/wushuPages/uwg/uwg.component';
import { CollegiatesComponent } from './performancePages/wushuPages/collegiates/collegiates.component';
import { DemosComponent } from './performancePages/wushuPages/demos/demos.component';
import { CheerleadingComponent } from './performancePages/cheerPages/cheerleading/cheerleading.component';
import { Cheer2013Component } from './performancePages/cheerPages/cheer2013/cheer2013.component';
import { Cheer2014Component } from './performancePages/cheerPages/cheer2014/cheer2014.component';
import { Cheer2015Component } from './performancePages/cheerPages/cheer2015/cheer2015.component';
import { ClassesComponent } from './projectPages/classes/classes.component';
import { HoohacksComponent } from './projectPages/hoohacks/hoohacks.component';
import { InternshipComponent } from './projectPages/internships/internship.component';
import { SgdGamesComponent } from './projectPages/sgdGames/sgd-games.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ResumeComponent,
    ContactComponent,
    ProjectsComponent,
    PerformancesComponent,
    WushuComponent,
    UwgComponent,
    CollegiatesComponent,
    DemosComponent,
    CheerleadingComponent,
    Cheer2013Component,
    Cheer2014Component,
    Cheer2015Component,
    ClassesComponent,
    HoohacksComponent,
    InternshipComponent,
    SgdGamesComponent,
    BlogComponent,
  ],
  imports: [
    RouterModule.forRoot([
        { path: "", component: HomeComponent}
    ]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
