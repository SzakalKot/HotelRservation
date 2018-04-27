import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  colorFlag: any;
  isBackgroundRed: any;
  registerMode = false;
  values: any;
  registerInfo = false ;
  constructor(private http: Http) { }

  ngOnInit() {}

  InfoToogle() {
    this.registerInfo = !this.registerInfo;
  }
  cancelInfoMode(resisterInfo: boolean) {
    this.registerInfo = resisterInfo;
  }

  registerToogle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(registerMode: boolean) {
  this.registerMode = registerMode;

  }

  getMyStyles() {
    const myStyles = {
       'background-image': !this.isBackgroundRed ? 'url(\'assets/front.jpg\')' : 'url(\'images/green.gif\')',
       'color': this.colorFlag ? 'black' : 'yellow'
    };
    return myStyles;
}
}
