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

keys()
  .then((resp) => {
    console.log(resp);
    if (resp[0] !== "morning") {
      let morning = ["one item", "two Items"];
      set("morning", morning)
        .then(() => {
          console.log("saved morning");
        })
        .catch(console.warn);
    }
  })
  .catch(console.warn);

// ADD ITEM
let morningAdd = document.getElementById("morning-add");
morningAdd.addEventListener("click", addTask);

function addTask() {
  event.preventDefault();
  let newTask;
  newTask = document.getElementById("morning-task").value;
  // alert(newTask)
  get("morning")
    .then((data) => {
      data.push(newTask);
      update("morning", (val) => {
        return (val = data);
      });
    })
    .catch(console.warn);

  //   update("morning", (val) => {
  //     return val.push(newTask);
  //   })
  //     .then((data) => {
  //       console.log(`saved ${data} to database`);
  //     })
  //     .catch(console.warn);
  get("morning").then((data) => {
    console.log(data);
  });
}
