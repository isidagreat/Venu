import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 headers = new Headers({ "content-type": "application/json", });
  constructor(private _http: HttpClient) { }
    allvenues(metroID){
      return this._http.get('https://api.songkick.com/api/3.0/metro_areas/'+metroID+'/calendar.json?apikey=');
    }
    getmetroid(lat, long){
      return this._http.get('https://api.songkick.com/api/3.0/search/locations.json?location=geo:'+lat+','+long+'&apikey=')
    }
    addUser(newUser){
      console.log(newUser);
      return this._http.post('/api/new', newUser)
    }
    login(user){
      console.log(user);
      return this._http.post('/api/login', user)
    }
    getsinglevenue(id){
      console.log("Printing ID from http service " + id['id']);
      return this._http.get('https://api.songkick.com/api/3.0/venues/'+id['id']+'/calendar.json?apikey=');
    }
    getImgReference(formattedSearch){
      console.log("printing from imgReference in the http service");
      return this._http.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='+formattedSearch+'&inputtype=textquery&fields=photos&key=')
    }

}
