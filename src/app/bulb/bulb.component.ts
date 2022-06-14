import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Bulb, TimeMode} from "../mode";


@Component({
  selector: 'app-bulb', templateUrl: './bulb.component.html', styleUrls: ['./bulb.component.scss']
})

export class BulbComponent implements OnInit {

  @Output() onShutterTimeChange = new EventEmitter<Bulb>();

  @Output() onCancelBlub = new EventEmitter();

  shutterTime: number = 0;
  shutterTimeMode: TimeMode = 'SECONDS';
  started = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onShutterTime() {
    this.started = true;
    const bulb: Bulb = {
      shutterTime: this.shutterTime, mode: this.shutterTimeMode
    }
    this.onShutterTimeChange.emit(bulb);
  }

  setShutterTimeMode(shutterTimeMode: TimeMode) {
    this.shutterTimeMode = shutterTimeMode;
  }

  onCancel() {
    this.started = false;
    this.onCancelBlub.emit();
  }

}
