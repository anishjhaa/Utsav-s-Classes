// const student = {
//     fullName: "Anish",
//     marks: 94.4,
//     printMarks : function(){
//         console.log("marks = ",this.marks);
//     }
// };

// Prototype
// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// };

// const anish = {
//     salary:5000,
// };
// anish.__proto__ = employee;

// const anish = {
//     salary:5000,
// };
// const lakshay = {
//     salary:6000,
// };
// anish.__proto__ = employee;
// lakshay.__proto__ = employee;

// const anish = {
//     salary:5000,
//     calcTax(){
//         console.log("tax rate is 20%");
//     }
// };

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyotaCar();
// // fortuner;
// // typeof fortuner;

// let lexus = new ToyotaCar();

// class ToyotaCar{
//     // constructor(){
//     //     console.log("creating new object");
//     // }
//     // constructor(brand){
//     //     console.log("creating new object");
//     //     this.brand = brand;
//     // }
//     constructor(brand, mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyotaCar();
// // fortuner;
// // typeof fortuner;

// let lexus = new ToyotaCar();

// let fortuner = new ToyotaCar("fortuner",10);    //constructor
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 12); //constructor
// console.log(lexus);


// Inheritance in JS
// class Person{
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     work()
//     {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("treat patients");
//     }
// }

// let anishObj = new Engineer();


// Super keyword
// class Person {
//     constructor() {
//         this.species = "homo sapiens";
//         console.log("Enter parent constructor");
//     }
//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }

//     work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person {
//     constructor(branch){
//         console.log("Enter child constructor");
//         super();    //to invoke parent class constructor
//         this.branch = branch;
//         console.log("Exit child constructor");
//     }
//     work() {
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person {
//     work() {
//         console.log("treat patients");
//     }
// }


// class Person {
//     constructor(name) {
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
// }

// class Engineer extends Person {
//     constructor(name){
//         super(name);    //to invoke parent class constructor
//     }
//     work() {
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("anish");