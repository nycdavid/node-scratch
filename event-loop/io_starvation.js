const fs = require('fs');

fs.readFile('./dummy.txt', () => {
  console.log('IO 1');
  let start = Date.now();
  let exit = false;

  process.nextTick(() => {
    console.log('process.nextTick 1');
    while (!exit) {
      let elapsedTime = Date.now() - start;
      if (elapsedTime > 3000) {
        exit = true;
      }
    }
  });
});

setImmediate(() => {
  console.log('Set Immediate 1');
});

setTimeout(() => {
  console.log('Timer 1')
}, 0);

setTimeout(() => {
  console.log('Timer 2')
}, 0);

setTimeout(() => {
  console.log('Timer 3')
}, 0);
