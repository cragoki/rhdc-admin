import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RacesComponent } from './components/races/races.component';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSortModule } from '@angular/material/sort'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertsTableComponent } from './components/Tables/alerts-table/alerts-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { ErrorsTableComponent } from './components/Tables/errors-table/errors-table.component';
import { RaceCourseTableComponent } from './components/Tables/race-course-table/race-course-table.component';
import { RaceCoursesComponent } from './components/race-courses/race-courses.component';
import { provideHttpClient } from '@angular/common/http';
import { EditRaceCourseComponent } from './components/edit-racecourse/edit-racecourse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsTableComponent } from './components/Tables/events-table/events-table.component';
import { RacesTableComponent } from './components/Tables/races-table/races-table.component';
import { RaceHorsesTableComponent } from './components/Tables/race-horses-table/race-horses-table.component';
import { EventRacesComponent } from './components/event-races/event-races.component';
import { RaceHorsesComponent } from './components/race-horses/race-horses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RacesComponent,
    AlertsTableComponent,
    ErrorsTableComponent,
    RaceCourseTableComponent,
    RaceCoursesComponent,
    EditRaceCourseComponent,
    EventsTableComponent,
    RacesTableComponent,
    RaceHorsesTableComponent,
    EventRacesComponent,
    RaceHorsesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
