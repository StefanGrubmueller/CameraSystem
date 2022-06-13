import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Mode, TimeLapse} from "../mode";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  mode: Mode | undefined;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  setMode(mode: Mode) {
    this.mode = mode;
  }

  setTimeLapseConfig(timeLapse: TimeLapse) {
    this.http.post('/time-lapse', {timeLapse: timeLapse}).subscribe();
  }

  cancelTimeLapse() {
    this.http.post('/time-lapse/cancel', {test: 'test'}).subscribe();
  }

  setShutterTime(shutterTime: number) {
    this.http.post('/bulb', {shutterTime: shutterTime}).subscribe();
  }

  cancelBulb() {
    this.http.post('/bulb/cancel', {test: 'test'}).subscribe();
  }

  onChange($event: number) {
    console.log($event);
  }
}