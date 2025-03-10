// // adding 100 paragraph
// for(let i = 1; i <= 100; i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = "This is para "+ i;
//     document.body.appendChild(newElement);
// }
// // // optimized code
// let myDiv = document.createElement('div');
// for(let i = 1; i <= 100; i++)
// {
//     let element = document.createElement('p');
//     element.textContent = "This is para "+ i;
//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);


// performance measure
const t1 = performance.now();
for(let i = 1; i <= 100; i++)
{
    let newElement = document.createElement('p');
    newElement.textContent = "This is para "+ i;
    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("This took " + (t2 - t1) + "ms");


// // optimized code
const t3 = performance.now();
let myDiv = document.createElement('div');
for(let i = 1; i <= 100; i++)
{
    let element = document.createElement('p');
    element.textContent = "This is para "+ i;
    myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("This took " + (t4 - t3) + "ms");

// let fragment = document.createDocumentFragment();
// for(let i = 1; i <= 100; i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = "This is Para "+ i;
//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment); //1 Reflow, 1 Repaint


// set time out
setTimeout(function()
{
    console.log("Hello Everyone");
}, 5000);