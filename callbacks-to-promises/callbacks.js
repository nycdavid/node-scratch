function somethingAsyncCallback(cb) {
  setTimeout(() => {
  });
}

function somethingAsyncPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 1000);
  });
}

let bar = somethingAsync();
bar.then(dta => {
  console.log(dta);
});
