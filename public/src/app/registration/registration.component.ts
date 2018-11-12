import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newUser: any = {};
  errors: any;

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    let regObservable = this._httpService.addUser(this.newUser);
    regObservable.subscribe(data => {
      if (data['error']){
        console.log(data['error'])
        this.errors = data['error']
      }
      else{
        console.log("Successfully added user", data);
        this.newUser = {userName:"", password:"", passwordCheck:""};
        this.router.navigate(['/home']);
      }
    });
  }

}
