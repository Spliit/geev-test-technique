import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISpecies } from './species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  private _url: string = "https://swapi.co/api/species/"

  constructor(private http: HttpClient) { }

  getSpecies(): Observable<ISpecies[]> {
    return this.http.get<ISpecies[]>(this._url);
  }
}
