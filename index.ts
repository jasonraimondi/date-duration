import { ms } from "./deps.ts";

export type DateDurationType = string;

export class DateDurationError extends Error {}

export class DateDuration {
  public readonly ms: number;

  constructor(interval: DateDurationType) {
    const time = ms(interval);
    if (typeof time !== "number") throw new DateDurationError("Invalid interval");
    this.ms = time;
  }

  get endDate(): Date {
    return new Date(this.endTimeMs);
  }

  get endTimeMs(): number {
    return Date.now() + this.ms;
  }

  get endTimeSeconds(): number {
    return Math.ceil(this.endTimeMs / 1000);
  }

  get seconds(): number {
    return Math.ceil(this.ms / 1000);
  }

  static getDateEnd(ms: string) {
    return new DateDuration(ms).endDate;
  }
}

export default DateDuration;
