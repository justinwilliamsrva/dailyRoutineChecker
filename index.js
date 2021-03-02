import {
  get,
  set,
  getMany,
  setMany,
  update,
  del,
  clear,
  keys,
  values,
  entries,
  createStore,
} from "https://cdn.jsdelivr.net/npm/idb-keyval@5/dist/esm/index.js";
// Declarations
let morningList = document.getElementById("morning-list");

// Adding date to page
let date = new Date();
let stringDate = date.toDateString();
let mainHeading = document.getElementById("main-heading");
let newH2 = document.createElement("h2");
newH2.innerHTML = stringDate;
mainHeading.insertBefore(newH2, mainHeading.childNodes[2]);

// Create INDEX DB DATABASE
keys()
  .then((resp) => {
    // console.log(resp);
    if (resp[0] !== "morning") {
      let morning = ["first item", "second items"];
      set("morning", morning)
        .then(() => {
          console.log("saved morning");
        })
        .catch(console.warn);
    }
    displayItems();
  })
  .catch(console.warn);

// captialize
function capital(item) {
  let str = item[0].toUpperCase() + item.slice(1);
  return str;
}

// DISPLAY ITEMS ON PAGE
function displayItems() {
  get("morning").then((data) => {
    let dataCap = data.map(capital);
    console.log(dataCap);
    addToPage(dataCap);
  });
}
function addToPage(arr) {
  for (let i = 0; i < arr.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("draggable", "true");
    div.setAttribute("class", "draggable");

    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", arr[0]);
    input.setAttribute("id", arr[0] + i);
    input.setAttribute("class", arr[0] + "Class");
    let label = document.createElement("label");
    label.setAttribute("class", "label");

    label.innerHTML = arr[i];
    let xButton = document.createElement("button", { style: "color:green" });
    xButton.setAttribute("style", "margin-left:20px");
    let n = i < 10 ? "0" + i : i;
    xButton.setAttribute("id", `${arr[0]}-delete-${n}`);
    xButton.setAttribute("class", "delete-button");
    xButton.innerHTML = "X";
    let br = document.createElement("br");

    // switch (arr[0]) {
    //   case "Morning":
    div.append(input);
    div.append(label);
    div.append(xButton);
    morningList.append(div);
    // morningList.append(br);
    // break;
    // case "Day":
    //   div.append(input);
    //   div.append(label);
    //   div.append(xButton);
    //   dayList.append(div);

    //   break;
    // case "Evening":
    //   div.append(input);
    //   div.append(label);
    //   div.append(xButton);
    //   eveningList.append(div);
  }
}

// ADD ITEM
let morningAdd = document.getElementById("morning-add");
morningAdd.addEventListener("click", addTask);

function addTask() {
  event.preventDefault();
  let newTask;
  newTask = document.getElementById("morning-task").value;
  // alert(newTask)
  get("morning").then((data) => {
    data.push(newTask);
    remove(morningList);
    let dataCap = data.map(capital);
    addToPage(dataCap);
    document.getElementById("morning-task").value = "";
    update("morning", (val) => {
      return (val = data);
    });
  });
}

function remove(x) {
  // console.log(x.firstChild);
  while (x.firstChild) {
    x.removeChild(x.firstChild);
  }
}
