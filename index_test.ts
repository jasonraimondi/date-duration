import { DateDuration, DateDurationError } from "./index.ts";
import { assertEquals, assertThrows } from "https://deno.land/std@0.175.0/testing/asserts.ts";
import { FakeTime } from "https://deno.land/std@0.191.0/testing/time.ts";

Deno.env.set("TZ", "utc");

Deno.test("returns end time in seconds", () => {
  const time = new FakeTime(0);

  try {
    assertEquals(new DateDuration("1m").endTimeSeconds, 60);
    assertEquals(new DateDuration("5m").endTimeSeconds, 60 * 5);
    assertEquals(new DateDuration("1d").endTimeSeconds, 60 * 60 * 24);
  } finally {
    time.restore();
  }
});

Deno.test("returns end time in milliseconds", () => {
  const time = new FakeTime("1970-01-01");

  try {
    assertEquals(new DateDuration("1m").endTimeMs, 1000 * 60);
    assertEquals(new DateDuration("5m").endTimeMs, 1000 * 60 * 5);
    assertEquals(new DateDuration("1d").endTimeMs, 1000 * 60 * 60 * 24);
  } finally {
    time.restore();
  }
});

Deno.test("returns end date", () => {
  const time = new FakeTime("1970-01-01");

  try {
    assertEquals(new DateDuration("0").endDate, new Date("1970-01-01T00:00:00"));
    assertEquals(new DateDuration("5m").endDate, new Date("1970-01-01T00:05:00"));
  } finally {
    time.restore();
  }
});

Deno.test("returns ms", () => {
  const foo = new DateDuration("1m");
  assertEquals(foo.ms, 1000 * 60);
});

Deno.test("throws DateDurationError on invalid input", () => {
  const throws = () => new DateDuration("INVALID");
  assertThrows(throws, DateDurationError);
});
