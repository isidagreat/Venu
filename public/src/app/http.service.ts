import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
    allvenues(){
      return this._http.get('https://api.songkick.com/api/3.0/metro_areas/12283/calendar.json?apikey=');
    }
    getsinglevenue(id){
      console.log("Printing ID from http service " + id['id']);
      return this._http.get('https://api.songkick.com/api/3.0/venues/'+id['id']+'/calendar.json?apikey=');
    }

}
