import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TimeLapse, TimeMode} from "../mode";

@Component({
  selector: 'app-time-lapse', templateUrl: './time-lapse.component.html', styleUrls: ['./time-lapse.component.scss']
})
export class TimeLapseComponent implements OnInit {

  @Output() onTimeLapseChange = new EventEmitter<TimeLapse>();

  @Output() onCancelTimeLapse = new EventEmitter();

  recordTime = 0;
  intervall = 0;

  timeMode: TimeMode = 'SECONDS';
  intervallMode: TimeMode = 'SECONDS';
  started = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  setTimeMode(timeMode: TimeMode) {
    this.timeMode = timeMode;
  }

  setIntervallMode(intervallMode: TimeMode) {
    this.intervallMode = intervallMode;
  }


  setTimeLapse() {
    this.started = true;
    const timeLapse: TimeLapse = {
      interval: this.intervall, length: this.recordTime, lengthMode: this.timeMode, intervallMode: this.intervallMode
    }
    this.onTimeLapseChange.emit(timeLapse);
  }

  onCancel() {

    this.started = false;
    this.onCancelTimeLapse.emit();
  }


}
