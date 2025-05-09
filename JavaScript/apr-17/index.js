let btn1 = document.querySelector("#previous");
let btn2 = document.querySelector("#next");
let img = document.querySelector(".card-container img");
let heading = document.querySelector(".card-container h2");
let currentDateAndTime = document.querySelector("#currentDateAndTime");

// img.setAttribute("src", "https://picsum.photos/id/18/400/300"); 



setInterval(() => {
  let date = new Date();
  currentDateAndTime.innerHTML = date;
}, 1000);

let i = 1;

btn1.addEventListener("click", () => {
  if (i > 1) {
    img.setAttribute("src", `https://picsum.photos/id/${--i}/400/300`);
    heading.innerText = `Image Present on ID = ${i}`;
  }
});
btn2.addEventListener("click", () => {
  if (i < 100) {
    img.setAttribute("src", `https://picsum.photos/id/${++i}/400/300`);
    heading.innerText = `Image Present on ID = ${i}`;
  }
});

document.body.style.background = "linear-gradient(red, blue)";