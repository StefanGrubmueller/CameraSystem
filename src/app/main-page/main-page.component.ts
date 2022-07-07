import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Bulb, Mode, TimeLapse} from "../mode";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  mode: Mode = 'TIMELAPSE';

  constructor(private http: HttpClient, private firestore: AngularFirestore) {
  }


  ngOnInit(): void {
  }

  setMode(mode: Mode) {
    this.mode = mode;
  }

  setTimeLapseConfig(timeLapse: TimeLapse) {
    this.firestore.doc(`Jakob/Timelapse`).update({
      status: true,
      interval: timeLapse.interval,
      intervalMode: timeLapse.intervalMode,
      length: timeLapse.length,
      lengthMode: timeLapse.lengthMode
    });
    this.firestore.doc(`Jakob/Bulb`).update({
      status: false
    });
  }

  cancelTimeLapse() {
    this.firestore.doc(`Jakob/Bulb`).update({
      status: false
    });
  }

  setShutterTime(bulb: Bulb) {
    this.firestore.doc(`Jakob/Bulb`).update({status: true, shutterTime: bulb.shutterTime, mode: bulb.mode});
    this.firestore.doc(`Jakob/Timelapse`).update({
      status: false
    });
  }

  cancelBulb() {
    this.firestore.doc(`Jakob/Bulb`).update({
      status: false
    });
  }

  onChange($event: number) {
    console.log($event);
  }
}
