// ./promise.js

let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let randomVal = Math.random();

        if (randomVal > 0.5) {
            resolve(randomVal);
        } else if (randomVal <= 0.5) {
            reject(randomVal);
        }
    }, 1000);
});

myPromise
    .then( (value) => {
        console.log("success", value);
    })
    .catch( (value) => {
        console.log('fail', value);
    })
    .then(() => {
      console.log('completed');
    });
