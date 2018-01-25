const timeoutStart = Date.now();
const fs = require('fs');

fs.readFile('./dummy.txt', () => {
  console.log('IO Phase');
});

setTimeout(() => {
  console.log('Timers Phase');
}, 0);
