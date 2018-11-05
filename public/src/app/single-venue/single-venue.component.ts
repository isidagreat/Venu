import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router'
import {Router} from "@angular/router";

@Component({
  selector: 'app-single-venue',
  templateUrl: './single-venue.component.html',
  styleUrls: ['./single-venue.component.css']
})
export class SingleVenueComponent implements OnInit {

  constructor(private _httpService: HttpService, private route: ActivatedRoute,private router: Router) { }
  id: any = {}
  events: any = {}
  venuName: String;
  venuLocation: String;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id['id'] = params['id'];
    });
    this.getSingleVenue(this.id);
  }
  getSingleVenue(id){
    console.log("Printing",this.id)
    //  Our http Response is an observable, store it in the variable tempObservable
    let observable = this._httpService.getsinglevenue(id);
    // subscribe to our observable and provide the code we would like to do with our data from the response
    observable.subscribe(data => {
      console.log("got the Venue", data) 
      this.events = data['resultsPage']['results']['event'];
      this.venuName = data['resultsPage']['results']['event'][0]['venue']['displayName'];
      this.venuLocation = data['resultsPage']['results']['event'][0]['location']['city']
      console.log(this.events);
      console.log(this.venuName);
      console.log(this.venuLocation);
    });

}

}
