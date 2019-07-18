# more-timeout

Simple function to run a timeout `n` times. :D

### Usage

```
const setTimeoutFor = require('more-timeout');
const timeout = setTimeoutFor(callback, 1000, 5); // Call callback every second 5 times
// timeout.clear() // To clear a timer before if runs out
// timeout.getTimeout() // To get the active timer
```
