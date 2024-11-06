// callback Hell:- >Nested callbacks stacked below one another forming a pyramid structure. This style of programming becomes difficult to uderstand and manage
// function getData(dataId)
// {
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000);
// }
// getData(1);
// getData(2);
// getData(3);

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){

//             getNextData();
//         }
//     }, 2000);
// }
// getData(1, getData(2));  //error getNextData is not a function
// getData(1, ()=>{
//     getData(2);
// })

// getData(1, () => {
//     console.log("Getting data2...");
//     getData(2, () => {
//         console.log("Getting data3...");
//         getData(3, () => {
//             console.log("Getting data4...");
//             getData(4);
//         })
//     })
// })

// Promise :-> It is a solution to callback hell.
// resolve, reject are callbacks provided by JS
// resolve(result)      reject(error)

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
// });

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     reject("sorry we don't have it");
// });

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             if(getNextData){
//                 getNextData();
//             }
//         }, 8000);
//         // reject("error");
//     })
// }

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

// .then() & catch()
// promise.then((res)=>{...})
// promise.catch((err)=>{...})
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("error");
    // resolve("success");
  });
};

// let promise = getPromise();
// promise.then(()=>{
//     console.log("promise fulfilled");
// });

// promise.catch(()=>{
//     console.log("rejected");
// })
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled", res);
// });

// promise.catch((err)=>{
//     console.log("rejected", err);
// })

function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("success");
    }, 4000);
  });
}
// console.log("fetching data1...");
// let p1 = asyncFunc();
// p1.then((res)=>{
//     console.log(res);
// })
// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success");
//         }, 6000);
//     })
// }
// console.log("fetching data1...");
// let p1 = asyncFunc();
// p1.then((res)=>{
//     console.log(res);
// })
// console.log("fetching data2...");
// let p2 = asyncFunc2();
// p1.then((res)=>{
//     console.log(res);
// })

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{})
// })

// simpliying above function
// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{})
// })

// Promise chain
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 5000);
  });
}

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     })
// })

// console.log("Getting data 1");
// getData(1).then((res)=>{
//     console.log("Getting data 2");
//     return getData(2);
// }).then((res)=>{
//     // console.log(res);
//     console.log("Getting data 3");
//     return getData(3);
// }).then((res)=>{
//     console.log("success");
// })

// Async- Await :--> async function always returns a promise
// async function myFunc(){...}
// await pause the execution of its surrounding async function until the promise is settled.

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     })
// }
// await api(); //error await is only valid in async function

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     })
// }

// async function getWeatherData() {
//     await api();
//     await api();
//     await api();
// }

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 5000);
  });
}

async function getAllData() {
  console.log("Getting data 1...");
  await getData(1);
  console.log("Getting data 2...");
  await getData(2);
  console.log("Getting data 3...");
  await getData(3);
}

// IIFE :-> Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined
