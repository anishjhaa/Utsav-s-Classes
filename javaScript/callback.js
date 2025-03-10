function sayHello()
{
    console.log("hello");
}
function sayHi()
{
    console.log("Hi..");
}

function add(num1, num2, callback)
{
    console.log(num1+num2);
    callback();
}

let a = 10;
let b = 20;
console.log(add(a,b,sayHello));
console.log(add(23,45,sayHi));

// passing anonymous function
add(30,6,function(){
    console.log("Byy");
})