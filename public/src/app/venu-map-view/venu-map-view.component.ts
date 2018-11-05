import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-venu-map-view',
  templateUrl: './venu-map-view.component.html',
  styleUrls: ['./venu-map-view.component.css']
})
export class VenuMapViewComponent implements OnInit {
 @ViewChild('gmap') gmapElement: any;
 map: google.maps.Map;
  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
