# color-logger

A simple logger which takes log-level and color as input and displays the corresponding output.
<br>
Log-levels include : 
* log
* info
* warn
* error

The function takes 3 parameters :
* @params1(type: string) - log-level
* @params2(type: string) - color
* @params3(type: string) - text

## Install :
```
npm install col-log
```

## Code:
```js
import colog from 'col-log';

colog("log","green","Hey how you doin?");
```

