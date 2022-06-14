import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TimeLapse, TimeMode} from "../mode";

@Component({
  selector: 'app-time-lapse', templateUrl: './time-lapse.component.html', styleUrls: ['./time-lapse.component.scss']
})
export class TimeLapseComponent implements OnInit {

  @Output() onTimeLapseChange = new EventEmitter<TimeLapse>();

  @Output() onCancelTimeLapse = new EventEmitter();

  lengthInSeconds = 0;
  lengthInMinutes = 0;
  intervall = 0;

  timeLapse: TimeLapse = {lengthInMinutes: null!, lengthInSeconds: null!, interval: null!};
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

  onTimeLapseLength(timeMode: TimeMode, timeLapseLength: number) {
    if (timeMode === 'SECONDS') {
      this.timeLapse.lengthInSeconds = timeLapseLength;
      // @ts-ignore
      this.timeLapse.lengthInMinutes = null;
    } else if (timeMode === 'MINUTES') {
      this.timeLapse.lengthInMinutes = timeLapseLength;
      // @ts-ignore
      this.timeLapse.lengthInSeconds = null;
    }
  }

  onIntervall(intervall: number) {
    this.timeLapse.interval = intervall;
  }

  setTimeLapse() {
    this.started = true;
    this.onTimeLapseChange.emit(this.timeLapse);
  }
  onCancel() {

    this.started = false;
    this.onCancelTimeLapse.emit();
  }


}
