import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Bulb, Mode, TimeLapse} from "../mode";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  mode: Mode = 'TIMELAPSE';

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  setMode(mode: Mode) {
    this.mode = mode;
  }

  setTimeLapseConfig(timeLapse: TimeLapse) {
    this.http.post('/api/time-lapse', {timeLapse: timeLapse}).subscribe();
  }

  cancelTimeLapse() {
    this.http.post('/api/time-lapse/cancel', {test: 'test'}).subscribe();
  }

  setShutterTime(bulb: Bulb) {
    this.http.post('/api/bulb', {shutterTime: bulb}).subscribe();
  }

  cancelBulb() {
    this.http.post('/api/bulb/cancel', {test: 'test'}).subscribe();
  }

  onChange($event: number) {
    console.log($event);
  }
}
