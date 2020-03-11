# UI Challenge 

UI Challenge is a Simple Javascript Library to show case a JS solution for a code challenge.

## Reusable Functions

The object of this exercise is to write a custom JavaScript logger which displays log messages in the
DOM.
The only HTML needed will be a div with an ID attribute of “result” - where the logger will append its
output.
Use the HTML below for your Log Output

``` html
<html>
    <body>
        <div id="result"></div>
    </body>
</html>
```

Write a reusable function that has the following characteristics:
1. The function accepts any log level defined at runtime (e.g. debug, warn, etc.) and accepts a corresponding color to apply to the log message (e.g. gray, orange, red, etc.) as arguments.
2. The function should return a new function that accepts a message as it’s argument and appends it to the DOM element show above with the ID attribute of "result". Use this to create loggers for debug, warn, and info levels.
3. Each appended log message should be prepended by the name of its associated level and displayed in the corresponding color.

Rules for Exercise 1
1. You may not hard code the log levels
2. You may not hard code the colors
3. You may not hard code any DOM element information particularly the id of the DOM element shown above
4. You may not use any stylesheets
5. You may not import any libraries to assist with your solution.
6. You may use any ECMAScript transpiler so that you can write your solution in modern ECMAScript.

## Asynchronous Programming
The following 5 lines must be included in your solution unmodified.
``` javascript
const timer = ms => logName => setTimeout(console.log, ms, `${logName} called`);
const log1 = timer(2500);
const log2 = timer(1500);
const log3 = timer(500);
```
Use the 3 functions above to implement a solution where the console outputs each function in the
order that they're listed above.
Example Console Output

``` bash
>>> log1 called
>>> log2 called
>>> log3 called
```

Rules for Exercise 2
1. You may modify the timer function as long as you maintain the given order of arguments and pass the ms argument to setTimeout.
2. You may not modify how the 3 log functions above are called.
3. You must call the log functions in the order that they're listed above. I.e. log1 must be called before log2, which must be called  before log3.
4. You may not import any libraries to assist with your solution.
5. You may use any ECMAScript transpiler so that you can write your solution in modern ECMAScript.

## HTML & CSS

A Product Owner responsible for the delivery of the new feature has written a ticket with the
following requirements:
1. Create an element that is 100x100 pixels with a light blue background. This will be referred to as "the element" in subsequent steps.
2. Position the element such that it centers itself both horizontally and vertically, regardless of how the viewport is resized.
3. Add a line of text 20 pixels below the element that reads, “You have 6 messages”.
4. The element should scale to twice its size when a mouse is moved over it. Be certain to ensure that the element remains horizontally and vertically centered at all times. The text below the element should remain 20 pixels below it throughout the scaling. When the Browser Viewport is resized to 500px or below, the following requirements apply:
1. The element changes its background color from light blue to yellow.
2. The text below the element should be hidden and it should no longer scale to twice its size when the mouse is moved over it.
3. Additionally, a 20x20 pixel circular badge should be displayed over the element that reads, “6”. This badge should have the following styling: a. Background color should be white b. Border should be 1 pixel, solid, and green in color c. Text should be centered horizontally and vertically and green in color d. The top left corner of the badge should be positioned
10 pixels above and 10 pixels to the left of the top left corner of the element, as illustrated in the example diagram.
Rules for this Exercise You may use any CSS Pre-Processors/Compilers that you'd like. ex: SASS/LESS/Stylus etc.

## Installation

Use the package manager NPM to install dependencies.

```bash
npm run app:setup
```

then run app:serve to build & serve the app.

```bash
npm run app:serve
```

Open up your browser and navigate to `localhost:8080` you will see `index.html` served at `port:8080`.

Make sure to open the developer console in your browser to see results for the Problem #2.

## Usage

```javascript
import { logger } from './lib/logger/logger.js';
import { timer } from './lib/timer/timer.js';

logger('debug', 'green')('div', 'This is my debug message!!! ', 'result');
...

const log1 = timer(2500);
... 

```

## Contributing
Private Project.

## License
[MIT](https://choosealicense.com/licenses/mit/)