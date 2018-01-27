const timeoutStart = Date.now();
const fs = require('fs');

fs.readFile('./dummy.txt', () => {
  console.log('IO Phase');
});

setTimeout(() => {
  console.log('Timer 1');
  // calling process.nextTick here will
  // cause the function to execute after the timers phase
  // and before the IO phase
  let start = Date.now();
  let exit = false;

  process.nextTick(() => {
    console.log('process.nextTick is executing');
    while (!exit) {
      let elapsedTime = Date.now() - start;
      if (elapsedTime > 3000) {
        exit = true;
      }
    }
    start = Date.now();
    exit = false;
    process.nextTick(() => {
      console.log('2nd process.nextTick is executing');
      while (!exit) {
        let elapsedTime = Date.now() - start;
        if (elapsedTime > 3000) {
          exit = true;
        }
      }
    });
  });
}, 0);

setTimeout(() => {
  console.log('Timer 2');
}, 0);

setTimeout(() => {
  console.log('Timer 3');
}, 0);
