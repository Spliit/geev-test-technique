import { Component, OnInit } from '@angular/core';
import {SpeciesService} from '../species.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  public species = []

  constructor(private _speciesService: SpeciesService) {
  }

  ngOnInit() {
    this._speciesService.getSpecies()
      .subscribe(data => this.species = data['results'])
  }
  
}
