const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve([1, 4, 7]);
    reject('Things went badly with the promise');
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log(`Successfully called promise: ${result}`, result);
  })
  .catch((error) => {
    console.log(`${error}`);
  });
