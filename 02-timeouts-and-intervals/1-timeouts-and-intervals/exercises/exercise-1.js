import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// fill in the blanks

let x = '';
log(x);

const callback1 = () => {
    x += 'ri';
    log('cb 1:', x);
};
setTimeout(callback1, 2000);

x += 'j';
log(x);

const callback2 = () => {
    const test = x === 'javascript';
    log('cb 2:', test);
    console.assert(test, 'x should be "javascript"');
};
setTimeout(callback2, 4000);

x += 'a';
log(x);

const callback3 = () => {
    x += 'sc';
    log('cb 3:', x);
};
setTimeout(callback3, 1000);

x += 'v';
log(x);

const callback4 = () => {
    x += 'pt';
    log('cb 4:', x);
};
setTimeout(callback4, 3000);

x += 'a';
log(x);

log('= = = =  the call stack is empty  = = = =');
