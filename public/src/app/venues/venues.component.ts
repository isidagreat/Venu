import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})

export class VenuesComponent implements OnInit {
 
  constructor(private _httpService: HttpService) { }
  venues: any = {}
  ngOnInit() {
    this.callApi();
  }
  callApi(){
    let obs = this._httpService.allvenues();
    obs.subscribe(data => {
      console.log('received the venues', data);
      this.venues = data['resultsPage']['results']['event']});
    }
}

