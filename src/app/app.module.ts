import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SpeciesListComponent } from './species-list/species-list.component';

import { SpeciesService } from './species.service';
import { SpeciePeopleComponent } from './specie-people/specie-people.component';

const appRoutes: Routes = [
  { path: '', component: SpeciesListComponent },
  { path: 'specie/:specieID', component: SpeciePeopleComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SpeciesListComponent,
    SpeciePeopleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpeciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
