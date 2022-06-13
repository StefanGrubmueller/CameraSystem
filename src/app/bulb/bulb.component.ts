import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TimeMode} from "../mode";

@Component({
  selector: 'app-bulb', templateUrl: './bulb.component.html', styleUrls: ['./bulb.component.scss']
})
export class BulbComponent implements OnInit {

  @Output() onShutterTimeChange = new EventEmitter<number>();

  @Output() onCancelBlub = new EventEmitter();

  shutterTime: number = 0;
  shutterTimeMode: TimeMode = 'SECONDS';

  constructor() {
  }

  ngOnInit(): void {
  }

  onShutterTime() {
    this.onShutterTimeChange.emit(this.shutterTime);
  }

  setShutterTimeMode(shutterTimeMode: TimeMode) {
    this.shutterTimeMode = shutterTimeMode;
  }

  onCancel() {
    this.onCancelBlub.emit();
  }


}
