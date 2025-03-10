const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];

    }
    return color;
};

// console.log(Math.floor(Math.random() * 16));
// console.log(randomColor());
let interValid;
const startChangingColor = function () {
    interValid = setInterval(changeByColor, 1000);
    function changeByColor() {
        document.body.style.backgroundColor = randomColor();
    }
};
document.querySelector("#start").addEventListener('click',startChangingColor);
const stopChangingColor = function()
{
    clearInterval(interValid);
}
document.querySelector("#stop").addEventListener('click',stopChangingColor);

// const stopChangingColor = function()