// setTimeout(function () {
//     console.log("third");
// }, 3000);
// function sync() {
//     console.log("first");
// };

// sync();
// console.log("second");

let meraPromise = new Promise(function (resolve, reject) {
    console.log("I am inside promise.");
    resolve(655);
});

// console.log("Pehle");

// let meraPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("I am inside promise.");
//     }, 3000);
//     resolve(1100);
// });
// console.log("Pehle");
// console.log(meraPromise);

// let meraPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("I am inside promise.");
//     }, 3000);
//     reject(new Error("Bhaiya ji reject krta hu order tumhara"));
// });
// console.log("Pehle");
// console.log(meraPromise);


// let meraPromise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("I am inside promise 1.");
//     }, 5000);

// });
// console.log("Pehle1");
// console.log(meraPromise1);

// let meraPromise2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("I am inside promise 2.");
//     }, 3000);

// });
// console.log("Pehle2");
// console.log(meraPromise2);

// promise chaining

// let meraPromise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("I am inside promise 1.");
//     }, 5000);
//     resolve(12);
// });
// meraPromise1.then((value) => {console.log(value)});


// let meraPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("I am inside promise.");
//     }, 3000);
//     reject(new Error("Bhaiya ji reject krta hu order tumhara"));
// });
// meraPromise.catch((error) => {console.log("Received an error")});


// let meraPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("I am inside promise.");
//     }, 3000);
//     reject(new Error("Bhaiya ji reject krta hu order tumhara"));
// });
// meraPromise.then((value) => {console.log(value)}, (error)=> {console.log("Received an error")});


// let waadaa1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("setimeout1 started.");
//     }, 2000);
//     resolve(true);
// });

// let output = waadaa1.then(() => {
//     let wadaa2 = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log("setimeout2 started.");
//         }, 3000);
//         resolve("waada2 resolved");
//     })
//     return wadaa2;

// });
// output.then((value) => console.log(value));

// async function abcd(){
//     return 5;
// }
// console.log(abcd());

// async function utility(){
//     let delhiMausam = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Delhi me bahut garmi hai");
//         }, 5000);
//     });

//     let hydMausam = new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("Hyd is cool");
//         }, 6000);
//     });

//     // let DM = delhiMausam;
//     // let HM = hydMausam;
//     let DM = await delhiMausam;
//     let HM = await hydMausam;
//     return[DM,HM];

// }
// console.log(utility());

// async function utility() {
// //     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');    //fetch api humhe ek promise return krti h
//     let content = await fetch('https://goweather.herokuapp.com/weather/Ny');    //fetch api humhe ek promise return krti h
//     let output = await content.json();
//         console.log(content.status);
//     console.log(output);

// }

// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// };

// let content = fetch('https://jsonplaceholder.typicode.com/posts',options);

// async function helper() {
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }

// async function utility(){
//     let ans = helper();
//     console.log(ans);
// }
// utility(); 