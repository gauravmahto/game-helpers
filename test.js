// async function test() {

//   return new Promise(async (res, rej) => {

//     throw 'Error new';

//     res(false);

//   });

// }

// (async () => {

//   try {
//     await test();
//   } catch (err) {
//     console.log(err);
//   }

// })();

const wait = (i, ms) => new Promise(resolve => setTimeout(() => resolve(i), ms));

// Implementation One (Using for-loop)
const printNumbers = () => new Promise((resolve) => {
  let pr = Promise.resolve(0);
  for (let i = 1; i <= 10; i += 1) {
    pr = pr.then((val) => {
      console.log(val);
      return wait(i, Math.random() * 1000);
    });
  }
  resolve(pr);
});
// printNumbers();

// Implementation Two (Using Recursion)

const printNumbersRecursive = () => {
  return Promise.resolve(0).then(function processNextPromise(i) {

    if (i === 10) {
      return undefined;
    }

    return wait(i, Math.random() * 1000).then((val) => {
      console.log(val);
      return processNextPromise(i + 1);
    });
  });
};
// printNumbersRecursive();

(async () => {

  new Promise(() => {

    (async () => {
      throw 'e';
    })();

    console.log('Hi');

  }).catch((error) => {
    console.error(error);
  });

  console.log('Bye');

})();
