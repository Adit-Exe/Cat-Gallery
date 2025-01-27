const url ="https://api.thecatapi.com/v1/images/search";
// const para = document.querySelector("#para");
const lmo = document.querySelector("#lmo");
const btn = document.querySelector("#btn");


const call = async () => {
    let res = await fetch(url);
    let data = await res.json();
    lmo.src = data[0].url;
}
btn.addEventListener("click", call);