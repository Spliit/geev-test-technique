import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpeciesService} from '../species.service';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-specie-people',
  templateUrl: './specie-people.component.html',
  styleUrls: ['./specie-people.component.css']
})
export class SpeciePeopleComponent implements OnInit {
  specie;
  specieName;
  public links = []
  public persons = []

  constructor(private route: ActivatedRoute, private _speciesService: SpeciesService, private _peopleService: PeopleService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.specie = params['params']['specieID'];
    });    

    this._speciesService.getSpecies()
      .subscribe(data => {
        this.specieName = data['results'][this.specie]['name']
        this.links = data['results'][this.specie]['people'];
        this.links.map(link => {
          this._peopleService.getPeople(link).subscribe(person => this.persons.push(person['name']))
      })
    })
  };
}
