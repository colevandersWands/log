# log

A handy helper for debugging expressions.  The main export is a function that takes one argument and:

1. logs the argument
2. returns the argument

```js
import { log } from './log.js';
const x = 1 + log(2 + 3); // 5
log(x); // 6
```

The exported function has one property for each console method.  You can destructure it to have more inline logs:

```js
import { log } from './log.js';
const { trace } = log;
const x = trace(1 + log(2 + 3)); // 5 then 6 with a stack trace
log.info(x); // 6
```
