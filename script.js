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
checkCheck();

function addToPage(arr) {
    for (let i = 1; i < arr.length; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", arr[0]);
        input.setAttribute("id", arr[0]+i);
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

var checkboxesChecked = [];
function getCheckedBoxes(chkboxName,arr) {
    var checkboxes = document.getElementsByName(chkboxName);
  for (var i=0; i<checkboxes.length; i++) {
    checkboxes[i].checked ? checkboxesChecked[i]= 1 : checkboxesChecked[i]= 0;
  }
    console.log(checkboxesChecked);
    localStorage.setItem(arr[0], checkboxesChecked);


}

var mornClick = document.getElementById("morning");
mornClick.addEventListener("click",alerts );
function alerts() {

    getCheckedBoxes("Morning", morningCap);
    checkCheck();


}


// Get Array from Local Storage and Update Page



function checkCheck() {
    let morningCheck = localStorage.getItem("Morning");
    let morningCheckArr = morningCheck.split(",")
    console.log(morningCheckArr.length)
    for (let i = 1; i < morningCheckArr.length; i++) {
        if (morningCheckArr[i] === "1") {
            let x = "Morning" + (i+1);
            console.log(typeof (x))
            console.log(x)
            document.getElementById(x).checked = true;


        }





    }
}