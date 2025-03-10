const URL = "https://cat-fact.herokuapp.com/facts";
// let promise = fetch(URL);
// console.log(promise);

// const getFacts = async ()=>{
//     console.log("getting data");
//     let response = await fetch(URL);
//     console.log(response);
// }
// getFacts();      
const factPara = document.querySelector("#facts");
const btn = document.querySelector("#start");

// const getFacts = async() =>{
//     console.log("getting data..");
//     let response = await fetch(URL);
//     // console.log(response);  //JSON FORMAT
//     let data = await response.json();
//     // console.log(data);
//     // console.log(data[1].text);
//     factPara.innerText = data[0].text;
// };

function getFacts(){
    fetch(URL)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            
            factPara.innerText = data[0].text;
        });
}
btn.addEventListener("click",getFacts);