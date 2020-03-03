setTimeout(() => {
  console.log(0);
}, 10);

setTimeout(() => {
  console.log(1);
  Promise.resolve(3).then(data => console.log(data))
}, 10);


setTimeout(() => {
  console.log(2);
}, 10);

Promise.resolve(4).then(data => console.log(data))

console.log('end')


function sleep(time) {
  let startTime = new Date();
  while (new Date() - startTime < time) {

  } 
  console.log('<--Next Loop-->');
}

setTimeout(() => {
  console.log('timeout1');
  setTimeout(() => {
    console.log('timeout3');
    sleep(1000);
  }); 
  new Promise((resolve) => {
    console.log('timeout1_promise');
    resolve();
  }).then(() => {
    console.log('timeout1_then');
  });
  sleep(1000);
});

setTimeout(() => {
  console.log('timeout2');
  setTimeout(() => {
    console.log('timeout4');
    sleep(1000);
  }); 
  new Promise((resolve) => {
    console.log('timeout2_promise');
    resolve();
  }).then(() => {
    console.log('timeout2_then');
  });
  sleep(1000);
});
