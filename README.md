# Waitthrottle
Throttle wrapper function.

## Install
```sh
npm install waitthrottle
```

## Usage
```js
import { throttle } from 'waitthrottle';

const wait = throttle(() => {
    console.log('Waiting 3000ms...');
}, 3000);

setInterval(wait, 100);