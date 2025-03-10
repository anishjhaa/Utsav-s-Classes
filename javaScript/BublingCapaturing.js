// BublingCapaturing
let d = document.getElementById("myDiv");
let b = document.getElementById("btn");

// 3rd parameter false pass hua h bydefault
b.addEventListener("click", btnClicked);
d.addEventListener("click", divClicked);
document.body.addEventListener("click", bodyClicked);

function btnClicked() {
  console.log("button clicked...");
}

function divClicked() {
  console.log("div clicked...");
}

function bodyClicked() {
  console.log("body clicked...");
}
