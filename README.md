# Waitthrottle
Throttle wrapper function.

## Install
```
npm install waitthrottle
```

## Usage
```js
import { throttle } from 'waitthrottle';

const wait = throttle(() => {
    console.log('Waiting 3000ms...');
}, 3000);

setInterval(wait, 100);