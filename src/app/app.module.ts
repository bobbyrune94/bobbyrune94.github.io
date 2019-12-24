import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { ClassesComponent } from './projectPages/classes/classes/classes.component';
import { HoohacksComponent } from './projectPages/hackathon/hoohacks/hoohacks.component';
import { InternshipComponent } from './projectPages/internships/internship/internship.component';
import { SgdGamesComponent } from './projectPages/sgdGames/sgd-games/sgd-games.component';
import { SimplisciComponent } from './projectPages/hackathon/simplisci/simplisci.component';
import { FaceNormalizerComponent } from './projectPages/hackathon/face-normalizer/face-normalizer.component';
import { CupanoowordsComponent } from './projectPages/hackathon/cupanoowords/cupanoowords.component';
import { DahlgrenComponent } from './projectPages/internships/dahlgren/dahlgren.component';
import { YextComponent } from './projectPages/internships/yext/yext.component';
import { KinComponent } from './projectPages/sgdGames/kin/kin.component';
import { DuskPatrolComponent } from './projectPages/sgdGames/dusk-patrol/dusk-patrol.component';
import { BardsTaleComponent } from './projectPages/sgdGames/bards-tale/bards-tale.component';


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
    CupanoowordsComponent,
    FaceNormalizerComponent,
    SimplisciComponent,
    InternshipComponent,
    DahlgrenComponent,
    YextComponent,
    SgdGamesComponent,
    BardsTaleComponent,
    DuskPatrolComponent,
    KinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
