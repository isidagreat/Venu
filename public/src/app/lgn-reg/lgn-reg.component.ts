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

  constructor(private _httpService: HttpService, private router: Router ){}

  ngOnInit() {
  }
  onSubmit(){
    this.router.navigate(['/home'])
  }

}
