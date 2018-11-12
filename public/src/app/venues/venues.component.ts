import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import {} from 'googlemaps';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})

export class VenuesComponent implements OnInit {
 
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private router: Router) { }
  venues: any = {}
  venueImagesFormat: any = [];
  vennueImagesReference: any= [];
  // currentLat: Number;
  // currentLong: Number;
  currentMetroID: any = {};
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.currentMetroID = params['metroid'];
      console.log(this.currentMetroID);
    })
    this.callApi(this.currentMetroID);
  }
  // findMe() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.currentLat = position.coords.latitude;
  //       this.currentLong = position.coords.longitude;
  //       console.log("Finished If with success");
  //       console.log(position);
  //       console.log(this.currentLat.toFixed(2), this.currentLong.toFixed(2))
  //       this.getMetroID(this.currentLat.toFixed(2), this.currentLong.toFixed(2))
  //     });
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }
  // getMetroID(lat, long){
  //   let metroObs = this._httpService.getmetroid(lat,long);
  //   metroObs.subscribe(data=>{
  //     console.log('received the Metro ID JSON', data)
  //     this.currentMetroID = data['resultsPage']['results']['location'][0]['metroArea']['id'];
  //     this.callApi(this.currentMetroID)
  //   });
  // }
  callApi(currentMetroID){
    let obs = this._httpService.allvenues(currentMetroID);
    obs.subscribe(data => {
      console.log('received the venues', data);
      this.venues = data['resultsPage']['results']['event'];
      this.venueImagesGenerator();
    });
      
    }
    venueImagesGenerator(){
      console.log.call('called image generator')
      for (let key in this.venues){
        this.venueImagesFormat.push(encodeURIComponent(this.venues[key]['venue']['displayName'].trim()));
      }
      this.venueImgReferenceGen(this.venueImagesFormat[0]);
      }

    venueImgReferenceGen(searchFormat){
      console.log("Venue img",searchFormat);
      let imgObs = this._httpService.getImgReference(searchFormat);
        imgObs.subscribe(data=>{
          console.log(data)
          this.vennueImagesReference.push(data);
          console.log(this.venueImgReferenceGen);
    });
  }
}

