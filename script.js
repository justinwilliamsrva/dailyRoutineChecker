// Arrays
let morning = [
  "morning",
  "water",
  "Coding",
  "Milk",
  "Breakfast base",
  "Dishwasher",
  "Sausage",
  "Smoothie",
  "Eggs",
  "Sausage",
  "Coffee",
  "Milk",
  "Smoothie",
  "Coffee",
  "Dishwasher",
  "Lunch",
];
let day = ["day", "water", "lesson plans", "emails", "main goals"];
let evening = [
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

// Capitalize
let morningCap = morning.map(capital);
let dayCap = day.map(capital);
let eveningCap = evening.map(capital);
let percentage = document.getElementById("percentage")


function capital(item) {
  let str = item[0].toUpperCase() + item.slice(1);
  return str;
}
// Adding checkboxes to form
let morningList = document.getElementById("morning-list");
let dayList = document.getElementById("day-list");
let eveningList = document.getElementById("evening-list");
addToPage(morningCap);
addToPage(dayCap);
addToPage(eveningCap);

function addToPage(arr) {
  for (let i = 1; i < arr.length; i++) {
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", arr[0]);
    input.setAttribute("id", arr[0] + i);
    input.setAttribute("class", arr[0] + "Class");
    let label = document.createElement("label");
    label.innerHTML = arr[i];
    let br = document.createElement("br");

    switch (arr[0]) {
      case "Morning":
        morningList.append(input);
        morningList.append(label);
        morningList.append(br);
        break;
      case "Day":
        dayList.append(input);
        dayList.append(label);
        dayList.append(br);
        break;
      case "Evening":
        eveningList.append(input);
        eveningList.append(label);
        eveningList.append(br);
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
  console.log(checkboxesChecked);
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
evaluate();
if (localStorage.getItem("Morning")) {
  checkMorning();

}
if (localStorage.getItem("Day")) {
  checkDay();


}
if (localStorage.getItem("Evening")) {
  checkEvening();


}

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

//
let old = localStorage.getItem("date");
let date = new Date();
let currentDate = date.getDate();
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
// Check all

// Get Percentage of Item's Checked
function evaluate() {
  morningCheck = localStorage.getItem("Morning");
  dayCheck = localStorage.getItem("Day");
  eveningCheck = localStorage.getItem("Evening");


    let morningCheckArr = morningCheck.split(",");
    let dayCheckArr = dayCheck.split(",");
    let eveningCheckArr = eveningCheck.split(",");

    let totalChecks = [...morningCheckArr,...dayCheckArr,...eveningCheckArr] ;

  let ones = 0;

  totalChecks.map((item) => (item == 1) ? ones++ : ones=ones);


  let percent = Math.floor((ones / totalChecks.length) * 100);
  console.log(percent)

  percentage.innerHTML = percent;

};
