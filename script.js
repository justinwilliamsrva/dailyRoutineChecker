// Arrays
let morning = [
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
let day = [
    "lesson plans",
    "emails",
    "mail goals",
]
let evening = [
    "exercise",
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
]

// Capitalize
let morningCap = morning.map(capital)
let dayCap = day.map(capital)
let eveningCap = evening.map(capital)

function capital(item) {

    let str = item[0].toUpperCase() + item.slice(1);
    return str;
}
// Adding to ul
let morningList = document.getElementById("morning-list");
let dayList = document.getElementById("day-list");
let eveningList = document.getElementById("evening-list");
morningCap.map(addList);
dayCap.map(addListDay);
eveningCap.map(addListNight);
function addList(item) {
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    let label = document.createElement("label");
    label.innerHTML = item;
    let br = document.createElement("br")
    morningList.append(input);
    morningList.append(label);
    morningList.append(br) ;
}
function addListDay(item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    dayList.append(li);
}
function addListNight(item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    eveningList.append(li);
}





