import { logger } from './lib/logger/logger.js';
import { timer } from './lib/timer/timer.js';

logger('debug', 'green')('div', 'This is my debug message!!! ', 'result');
logger('error', 'red')('p', 'Whooops we got an error! ', 'result');
logger('myCustomLog', 'orange')('article', 'This my custom output log. ', 'result');
logger('TEST', 'purple')('p', 'TEST GOES HERE');
logger()();

const log1 = timer(2500);
const log2 = timer(1500);
const log3 = timer(500);

async function myLogs() {
    await log1('log1');
    await log2('log2');
    await log3('log3');
}

myLogs();