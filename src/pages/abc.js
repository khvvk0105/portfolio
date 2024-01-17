//synchronous daraallah - asynchron zereg

let num = 10;

async function waitFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("Promise resolved");
    }, 2000);
  });
}

async function doSomething() {
  console.log("before waitFunction");
  const result = await waitFunction();
  console.log(result);
  console.log("after waitFunction");
}
console.log("before function");
doSomething();
console.log("after function");
