// Arrays
let morning = [
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



// Adding to ul
let morningList = document.getElementById("morning-list");
let dayList = document.getElementById("day-list");
let eveningList = document.getElementById("evening-list");


morning.map(addList);
day.map(addListDay);
evening.map(addListNight);



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
function addListNight(item) {
    let li = document.createElement("li");
    li.innerHTML = item;

    eveningList.append(li);
}