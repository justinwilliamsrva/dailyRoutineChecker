// Arrays
let date = new Date();
let currentDate = date.getDate();
let currentDay = date.getDay();
console.log(currentDay)
let morning, day, evening;

function arrayDay() {
  switch (currentDay) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      morning = [
        "morning",
        "water",
        "Coding",
        "Milk",
        "Breakfast base",
        "Dishwasher",
        "Smoothie",
        "Coffee",
        "Clean From breakfast",
        "Lunch",
      ];
      day = ["day", "water", "lesson plans", "emails", "main goals"];
      evening = [
        "evening",
        "exercise",
        "water",
        "milk",
        "litter",
        "laundry",
        "cat food and water",
        "clean dining room",
        "computer room",
        "bathroom",
        "tea",
        "kitchen",
        "dishwasher",
        "coding",
      ];

      break;
    case 6:
      morning = [
        "Laundry room floors",
        "dining room table",
        "dining room floors",
        "Florida Room Organize",
        "Nursery Toys",
        "Nursery Books",
        "Bedroom Clear Floor",
        "Bedroom Clear Bed",
        "Kitchen Frig",
        "Kitchen Floors",
        "Car Mileage",
        "Car Clean",
      ];
      day = ["Laundry", "water", "lesson plans", "emails", "main goals"];
      evening = [
        "evening",
        "exercise",
        "water",
        "milk",
        "litter",
        "laundry",
        "cat food and water",
        "clean dining room",
        "computer room",
        "bathroom",
        "tea",
        "kitchen",
        "dishwasher",
        "coding",
      ];
      break;
    default:
      morning = [];
      day = [];
      evening = [];
  }
}
arrayDay();
// Capitalize

let morningCap = morning.map(capital);
let dayCap = day.map(capital);
let eveningCap = evening.map(capital);
let percentage = document.getElementById("percentage");
let percent;
let old = localStorage.getItem("date");

let month = date.getMonth() + 1;
let today = date.getDate();
let year = date.getFullYear();
let saveDate = `${month}-${today}-${year}`;

const submit = document.getElementById("submit");
let saveCount;

console.log(`old:${old} current${currentDate}`);
function capital(item) {
  let str = item[0].toUpperCase() + item.slice(1);
  return str;
}



// Adding date to page
let stringDate = date.toDateString();
let mainHeading = document.getElementById("main-heading")
let newH2 = document.createElement("h2")
newH2.innerHTML = stringDate;
mainHeading.insertBefore(newH2, mainHeading.childNodes[2])



// Adding checkboxes to form
let morningList = document.getElementById("morning-list");
let dayList = document.getElementById("day-list");
let eveningList = document.getElementById("evening-list");

addToPage(morningCap);
addToPage(dayCap);
addToPage(eveningCap);





function addToPage(arr) {
  for (let i = 1; i < arr.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("draggable", "true");
    div.setAttribute("class", "draggable");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", arr[0]);
    input.setAttribute("id", arr[0] + i);
    input.setAttribute("class", arr[0] + "Class");
    let label = document.createElement("label");

    label.innerHTML = arr[i];
    let xButton = document.createElement("button", { style: "color:green" });
    xButton.setAttribute("style", "margin-left:20px");
    let n = i < 10 ? "0" + i : i;
    xButton.setAttribute("id", `${arr[0]}-delete-${n}`);
    xButton.setAttribute("class", "delete-button");
    xButton.innerHTML = "X";
    let br = document.createElement("br");

    switch (arr[0]) {
      case "Morning":
        div.append(input);
        div.append(label);
        div.append(xButton);
        morningList.append(div);
        // morningList.append(br);
        break;
      case "Day":
        div.append(input);
        div.append(label);
        div.append(xButton);
        dayList.append(div);

        break;
      case "Evening":
        div.append(input);
        div.append(label);
        div.append(xButton);
        eveningList.append(div);
    }
  }
}

// Create Array and save to Local Storage
function getCheckedBoxes(chkboxName, arr) {
  var checkboxesChecked = [];

  var checkboxes = document.getElementsByName(chkboxName);
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked
      ? (checkboxesChecked[i] = 1)
      : (checkboxesChecked[i] = 0);
  }
  // console.log(checkboxesChecked);
  localStorage.setItem(arr[0], checkboxesChecked);
}

morningList.addEventListener("click", morningClickFunc);
function morningClickFunc() {
  getCheckedBoxes("Morning", morningCap);

  evaluate();
}

var dayClick = document.getElementById("day");
dayClick.addEventListener("click", dayClickFunc);
function dayClickFunc() {
  getCheckedBoxes("Day", dayCap);
  evaluate();
}

var eveningClick = document.getElementById("evening");
eveningClick.addEventListener("click", eveningClickFunc);
function eveningClickFunc() {
  getCheckedBoxes("Evening", eveningCap);

  evaluate();
}

// Get Array from Local Storage and Update Page
let morningCheck = localStorage.getItem("Morning");

function checkMorning() {
  let morningCheckArr = morningCheck.split(",");
  for (let i = 0; i < morningCheckArr.length; i++) {
    let x = "Morning" + (i + 1);
    if (morningCheckArr[i] === "1") {
      document.getElementById(x).checked = true;
    } else {
      document.getElementById(x).checked = false;
    }
  }
}
let dayCheck = localStorage.getItem("Day");

function checkDay() {
  let dayCheckArr = dayCheck.split(",");

  for (let i = 0; i < dayCheckArr.length; i++) {
    let x = "Day" + (i + 1);
    if (dayCheckArr[i] === "1") {
      document.getElementById(x).checked = true;
    } else {
      document.getElementById(x).checked = false;
    }
  }
}
let eveningCheck = localStorage.getItem("Evening");

function checkEvening() {
  let eveningCheckArr = eveningCheck.split(",");
  for (let i = 0; i < eveningCheckArr.length; i++) {
    let x = "Evening" + (i + 1);
    if (eveningCheckArr[i] === "1") {
      document.getElementById(x).checked = true;
    } else {
      document.getElementById(x).checked = false;
    }
  }
}

let storageKeys = [];

function checkDays() {
  for (let i = 0; i < localStorage.length; i++) {
    x = localStorage.key(i);
    if (x == "Morning") {
      checkMorning();
    }
    if (x == "Day") {
      checkDay();
    }
    if (x == "Evening") {
      checkEvening();
    }
  }
}
checkDays();
evaluate();

// Create Clear Button Function
let morningButton = document.getElementById("morning-button");
morningButton.addEventListener("click", eraseMorning);
function eraseMorning() {
  let morningCheckArr = morningCheck.split(",");
  morningCheckArr.forEach((num, index) => {
    return (morningCheckArr[index] = num * 0);
  });
  localStorage.setItem("Morning", morningCheckArr);
  morningCheck = localStorage.getItem("Morning");
  checkMorning();
  evaluate();
}

let dayButton = document.getElementById("day-button");
dayButton.addEventListener("click", eraseDay);
function eraseDay() {
  let dayCheckArr = dayCheck.split(",");

  dayCheckArr.forEach((num, index) => {
    return (dayCheckArr[index] = num * 0);
  });
  localStorage.setItem("Day", dayCheckArr);
  dayCheck = localStorage.getItem("Day");
  checkDay();
  evaluate();
}
let eveningButton = document.getElementById("evening-button");
eveningButton.addEventListener("click", eraseEvening);
function eraseEvening() {
  let eveningCheckArr = eveningCheck.split(",");

  eveningCheckArr.forEach((num, index) => {
    return (eveningCheckArr[index] = num * 0);
  });
  localStorage.setItem("Evening", eveningCheckArr);
  eveningCheck = localStorage.getItem("Evening");
  checkEvening();
  evaluate();
}
let clearAll = document.getElementById("clear-all");
clearAll.addEventListener("click", clearAllFunc);
function clearAllFunc() {
  eraseDay();
  eraseMorning();
  eraseEvening();
}

// Check all
let checkAllMorning = document.getElementById("check-morning");
checkAllMorning.addEventListener("click", checkingMorning);
function checkingMorning() {
  let morningCheckAllArr = morningCheck.split(",");
  let newMorning = morningCheckAllArr.map((index) => (index = 1));
  console.log(newMorning);
  localStorage.setItem("Morning", newMorning);
  morningCheck = localStorage.getItem("Morning");
  checkMorning();
  evaluate();
}

let checkAllDay = document.getElementById("check-day");
checkAllDay.addEventListener("click", checkingDay);
function checkingDay() {
  let dayCheckAllArr = dayCheck.split(",");
  let newDay = dayCheckAllArr.map((index) => (index = 1));
  console.log(newDay);
  localStorage.setItem("Day", newDay);
  dayCheck = localStorage.getItem("Day");
  checkDay();
  evaluate();
}

let checkAllEvening = document.getElementById("check-evening");
checkAllEvening.addEventListener("click", checkingEvening);
function checkingEvening() {
  let eveningCheckAllArr = eveningCheck.split(",");
  let newEvening = eveningCheckAllArr.map((index) => (index = 1));
  console.log(newEvening);
  localStorage.setItem("Evening", newEvening);
  eveningCheck = localStorage.getItem("Evening");
  checkEvening();
  evaluate();
}

let checkAll = document.getElementById("check-all");
checkAll.addEventListener("click", checkAllFunc);
function checkAllFunc() {
  checkingDay();
  checkingMorning();
  checkingEvening();
}

// console.log(old + currentDate);
let resetDate = document.getElementById("reset-date");
resetDate.addEventListener("click", saveCheck);

function saveCheck() {
  resetDate.checked
    ? localStorage.setItem("reset", "true")
    : localStorage.setItem("reset", "false");
}

let resetSaved = localStorage.getItem("reset");
getCheck();

function getCheck() {
  if (resetSaved == "true") {
    resetDate.checked = true;
    resetOnDate();
  }
}

function resetOnDate() {
  if (old != currentDate) {
    clearAllFunc();
    localStorage.setItem("date", currentDate);
  }
}

// Get Percentage of Item's Checked
function evaluate() {
  getCheckedBoxes("Morning", morningCap);
  getCheckedBoxes("Day", dayCap);
  getCheckedBoxes("Evening", eveningCap);

  morningCheck = localStorage.getItem("Morning");
  dayCheck = localStorage.getItem("Day");
  eveningCheck = localStorage.getItem("Evening");

  let morningCheckArr = morningCheck.split(",");
  let dayCheckArr = dayCheck.split(",");
  let eveningCheckArr = eveningCheck.split(",");

  let totalChecks = [...morningCheckArr, ...dayCheckArr, ...eveningCheckArr];

  let ones = 0;

  totalChecks.map((item) => (item == 1 ? ones++ : (ones = ones)));

  percent = Math.floor((ones / totalChecks.length) * 100);
  // console.log(percent);

  percentage.innerHTML = percent;
}

// Submit Daily Percent
function saveData() {
  saveCount = 0;
  saveCount++;
  localStorage.setItem("saveCount", saveCount);
  let confirms = confirm(
    `Warning: You can only submit your percentage once a day. Would you like to submit your data for ${saveDate}?`
  );
  if (confirms) {
    let oldData = localStorage.getItem("SavedData");
    if (oldData) {
      let newData = oldData + `,${saveDate}:${percent}`;

      localStorage.setItem("SavedData", newData);
    } else {
      localStorage.setItem("SavedData", `"${saveDate}":"${percent}"`);
    }
    submit.setAttribute("style", "display:none");
  }
}
if (old != currentDate) {
  localStorage.setItem("saveCount", 0);
}
console.log(localStorage.getItem("saveCount"));
if (
  localStorage.getItem("saveCount") == 0 ||
  localStorage.getItem("saveCount") == null
) {
  submit.setAttribute("style", "display:inline");
} else {
  submit.setAttribute("style", "display:none");
}
submit.addEventListener("click", saveData);

// Draggable items
function createDraggables() {
  const draggables = document.querySelectorAll(".draggable");
  const forms = document.querySelectorAll(".form");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });
    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });

  forms.forEach((form) => {
    form.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(form, e.clientY);
      // console.log(afterElement);
      const draggable = document.querySelector(".dragging");

      if (afterElement == null) {
        form.appendChild(draggable);
      } else {
        form.insertBefore(draggable, afterElement);
      }
    });
  });

  function getDragAfterElement(form, y) {
    const draggableElements = [
      ...form.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        // console.log(box)
        const offset = y - box.top - box.height / 2;
        console.log(offset);
        // console.log(closest.offset);
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
}
createDraggables();
// Delete Function
let newTarget;
let removeDiv = document.getElementById("morning-list");
let NewTargetInt;
function remove(x) {
  console.log(x.firstChild);
  while (x.firstChild) {
    x.removeChild(x.firstChild);
  }
}
createDeleteButtons();

function createDeleteButtons() {
  let deleteButton = document.querySelectorAll(".delete-button");
  deleteButton.forEach((dbutton) => {
    dbutton.addEventListener("click", (e) => {
      // alert("hi")
      let timeOfDay = e.target.id.slice(0, 1);
      console.log(timeOfDay);
      switch (timeOfDay) {
        case "M":
          newTarget = e.target.id.slice(15, 17);
          NewTargetInt = parseInt(newTarget);
          // console.log(NewTargetInt);

          morningCap.splice(NewTargetInt, 1);
          // console.log(morningCap);
          remove(morningList);
          addToPage(morningCap);
          createDeleteButtons();
          createDraggables();
          break;
        case "D":
          newTarget = e.target.id.slice(11, 13);
          NewTargetInt = parseInt(newTarget);
          console.log(NewTargetInt);

          dayCap.splice(NewTargetInt, 1);
          // console.log(morningCap);
          remove(dayList);
          addToPage(dayCap);
          createDeleteButtons();
          createDraggables();
          break;
        default:
          newTarget = e.target.id.slice(15, 17);
          NewTargetInt = parseInt(newTarget);
          console.log(NewTargetInt);

          eveningCap.splice(NewTargetInt, 1);
          // console.log(morningCap);
          remove(eveningList);
          addToPage(eveningCap);
          createDeleteButtons();
          createDraggables();
          break;
      }
    });
  });
}


// Add Tasks to the Page



