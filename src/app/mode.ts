export type Mode = 'TIMELAPSE' | 'BULB';

export type TimeLapse = {
  interval: number;
  lengthInSeconds: number;
  lengthInMinutes: number;
}

export type TimeMode = 'SECONDS' | 'MINUTES';
