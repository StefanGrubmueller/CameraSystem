export type Mode = 'TIMELAPSE' | 'BULB';

export type TimeLapse = {
  interval: number;
  intervalMode: TimeMode;
  length: number;
  lengthMode: TimeMode;
}

export type TimeMode = 'SECONDS' | 'MINUTES';

export type  Bulb = {
  shutterTime: number; mode: TimeMode;
};
