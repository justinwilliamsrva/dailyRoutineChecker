// Arrays
let morning = [
    "coding",
    "milk",
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

// Adding to ul
let morningList = document.getElementById("morning-list");
let dayList = document.getElementById("day-list");

morning.map(addList);
day.map(addListDay)

function addList(item) {
    let li = document.createElement("li");
    li.innerHTML = item;

    morningList.append(li);
}
function addListDay(item) {
    let li = document.createElement("li");
    li.innerHTML = item;

    dayList.append(li);
}
