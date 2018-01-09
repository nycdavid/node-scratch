function returnsPromise() {
  return new Promise(function executor(resolve, reject) {
    try {
      // setTimeout(function() {
      //   resolve('resolve: true');
      // }, 1000);
      throw 'wasted';
    } catch(e) {
      reject(e);
    }
  });
}

function asyncFnThatReturnsErr() {
  return new Promise((resolve, reject) => {
    try {
      throw 'Error from function';
    } catch(e) {
      reject(e);
    }
  });
}

function asyncFnThatResolvesFine() {
  new Promise((resolve, reject) => {
    resolve('Resolved just fine.');
  });
}

function errorCatcher(e) {
  console.log(e);
}

returnsPromise().then(resolve).catch(reject);
