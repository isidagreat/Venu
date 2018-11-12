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
 currentLat: any;
 currentLong: any;
 marker: any;
 isTracking: Boolean;
 

  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(37.3382, -121.8863),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
findMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.showPosition(position);
      console.log("Finished If with success");
      console.log(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
trackMe() {
  if (navigator.geolocation) {
    this.isTracking = true;
    navigator.geolocation.watchPosition((position) => {
      this.showTrackingPosition(position);
      console.log(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }
  showTrackingPosition(position) {
    console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }

}
