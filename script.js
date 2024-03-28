const input = document.querySelector(".input1");
const list = document.querySelector("#list-container");
const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let fullDate = `${day}/${month}/${year}`;
function addTask() {
  if (input.value === "") {
    alert("You must enter something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `${input.value} - ${fullDate}`;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function displayList() {
  list.innerHTML = localStorage.getItem("data");
}
displayList();

const id = document.querySelector("#clock");

setInterval(function () {
  const d = new Date();
  let time = d.getTime();
  id.innerHTML = d.toLocaleTimeString();
}, 1000);
