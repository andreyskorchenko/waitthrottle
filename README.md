# Waitthrottle
Throttle wrapper function.
## Install
```shell
npm install waitthrottle

## Usage
```js
import { throttle } from 'waitthrottle';

const wait = throttle(() => {
    console.log('Waiting...');
}, 3000);

setInterval(wait, 100);