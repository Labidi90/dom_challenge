//Add new ToDo Task
var addToDo = document.querySelector(".addBtn");
//console.log(addToDo);
var input = document.querySelector(".input-group input");
//console.dir(input);
var ul = document.querySelector(".todo-list");
//console.log(ul);
addToDo.addEventListener("click", function (e) {
  if (input.value === "") {
    alert("you should type something");
  } else {
    var newLi = document.createElement("li");
    var newSpan = document.createElement("span");
    var newIcon = document.createElement("i");
    //console.log(newLi, newSpan, newIcon);
    newSpan.innerText = input.value;
    //console.log(newSpan);
    newIcon.className = "fa-solid fa-trash-can";
    //console.dir(newIcon);
    newLi.append(newSpan, newIcon);
    //console.log(newLi);
    ul.append(newLi);
    newIcon.addEventListener("click", function (event) {
      event.target.parentElement.remove();
    });
    newSpan.addEventListener("click", function (event) {
      event.target.classList.toggle("completed");
    });
  }
});

// Get removeTask button
var removeTasks = document.querySelectorAll(".fa-trash-can");
for (var i = 0; i < removeTasks.length; i++) {
  removeTasks[i].addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
}
