const para = document.querySelector(".container p");

function clickHandle() {
  para.innerHTML = "You <b>clicked</b>";
  para.style.backgroundColor = "#aaa";
}
function dbClickHandle() {
  para.innerHTML = "You <b>double clicked</b>";
  para.style.backgroundColor = "#aba";
}
function leftClickHandle() {
  para.innerHTML = "You <b>left clicked</b>";
  para.style.backgroundColor = "#12a";
}
function mouseDownHandle() {
  para.innerHTML = "You <b>are pressing mouse!</b>";
  para.style.backgroundColor = "#ba3";
  para.removeEventListener("mousedown", mouseDownHandle);
}

para.addEventListener("click", clickHandle);
para.addEventListener("dblclick", dbClickHandle);
para.addEventListener("contextmenu", leftClickHandle);
para.addEventListener("mousedown", mouseDownHandle);

