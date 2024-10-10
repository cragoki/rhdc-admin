import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RacesComponent } from './components/races/races.component';
import { RaceCoursesComponent } from './components/race-courses/race-courses.component';
import { EditRaceCourseComponent } from './components/edit-racecourse/edit-racecourse.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'races', component: RacesComponent },
  { path: 'race-courses', component: RaceCoursesComponent },
  { path: 'edit-racecourse/:id', component: EditRaceCourseComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }