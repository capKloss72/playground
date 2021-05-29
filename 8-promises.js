// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve([1, 4, 7]);
//     reject('Things went badly with the promise');
//   }, 2000);
// });

// doWorkPromise
//   .then((result) => {
//     console.log(`Successfully called promise: ${result}`, result);
//   })
//   .catch((error) => {
//     console.log(`${error}`);
//   });

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(2, 2)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

add(2, 2)
  .then((sum) => {
    console.log(`first sum ${sum}`);
    return add(sum, 2);
  })
  .then((sum2) => {
    console.log(`second sum ${sum2}`);
    return add(sum2, 2);
  })
  .then((sum3) => {
    console.log(`third sum ${sum3}`);
  })
  .catch((e) => {
    console.log(e);
  });
