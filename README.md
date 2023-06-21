# DateDuration

The `DateDuration` class represents a duration of time specified in milliseconds. It provides methods to calculate and retrieve information about the duration.

[![Deno Version](https://shield.deno.dev/x/date_duration?style=flat-square)](https://deno.land/x/date_duration)
[![Npmjs.org Version](https://img.shields.io/npm/v/@jmondi/date-duration?style=flat-square)](https://www.npmjs.com/package/@jmondi/date-duration)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/jasonraimondi/date-duration/test.yml?branch=main&label=Unit%20Tests&style=flat-square)](https://github.com/jasonraimondi/date-duration)
[![Test Coverage](https://img.shields.io/codeclimate/coverage/jasonraimondi/date-duration?style=flat-square)](https://codeclimate.com/github/jasonraimondi/date-duration/test_coverage)
[![NPM Downloads](https://img.shields.io/npm/dt/@jmondi/date-duration?label=npm%20downloads&style=flat-square)](https://www.npmjs.com/package/@jmondi/date-duration)

## Install (npm)

```bash
pnpm add @jmondi/date-duration
```

### Deno

```ts
import { DateDuration } from "https://deno.land/x/date_duration";
```

## Usage

The class is based on the [ms](https://github.com/vercel/ms) package.

```ts
const duration = new DateDuration("2d");
```

Access the properties and methods of the `DateDuration` instance:

```ts
console.log(duration.endDate);          // Get the end date as a JavaScript Date object
console.log(duration.endTimeMs);        // Get the end time in milliseconds
console.log(duration.endTimeSeconds);   // Get the end time in seconds (rounded up)
console.log(duration.seconds);          // Get the duration in seconds (rounded up)
```

You can also use the static method `getDateEnd` to get the end date directly without creating an instance:

```javascript
const endDate = DateDuration.getDateEnd("1w");
console.log(endDate);  // Get the end date as a JavaScript Date object
```
