import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lgn-reg',
  templateUrl: './lgn-reg.component.html',
  styleUrls: ['./lgn-reg.component.css']
})
export class LgnRegComponent implements OnInit {
  user: any = {};
  errors: any;
  currentLat:any;
  currentLong:any;
  currentMetroID: any;
  constructor(private _httpService: HttpService, private router: Router ){}

  ngOnInit() {
  }
  onSubmit(){
    let lgnObservable = this._httpService.login(this.user);
    lgnObservable.subscribe(data => {
      if (data['error']){
        console.log(data['error'])
        this.errors = data['error']
      }
      else{
        console.log("Successfully logged in", data);
        this.user = {userName:"", password:""};
        this.findMe();
        console.log(this.currentMetroID)
      }
    });
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
        console.log("Finished If with success");
        console.log(position);
        this.getMetroID(this.currentLat.toFixed(2), this.currentLong.toFixed(2))
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getMetroID(lat, long){
    let metroObs = this._httpService.getmetroid(lat,long);
    metroObs.subscribe(data=>{
      console.log('received the Metro ID JSON', data)
      this.currentMetroID = data['resultsPage']['results']['location'][0]['metroArea']['id'];
      console.log(this.currentMetroID);
      this.router.navigate(['/home/' + this.currentMetroID]);
    });
  }

}
