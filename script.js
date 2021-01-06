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

// Adding to ul
let morningList = document.getElementById("morning-list");

morning.map(addList);

function addList(item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    morningList.append(li);
}
