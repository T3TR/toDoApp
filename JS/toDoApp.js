import { TaskList } from "./TaskList.js";


// Logic for creating new Tasks and adding them to the TaskList Array.
const taskList = new TaskList()

window.onClickAdd = function(e){

    e.preventDefault();
    let newTaskName = document.getElementById('TaskName').value
    let newDueDate = document.getElementById('DueDate').value
    let newDescription = document.getElementById('Description').value

    let newTask = taskList.createNewTask(newTaskName, newDueDate, newDescription)
    console.log(taskList)

    // Logic for adding Tasks from the TaskList to the HTML ul element and display them.
    const taskItemsList = document.getElementById("taskItemsList");
    const newTaskListItem = document.createElement("li");
    newTaskListItem.id = newTask.ID;
    newTaskListItem.textContent = newTask.taskName +" "+ newTask.optDescr +" "+ newTask.dueDate;
    taskItemsList.appendChild(newTaskListItem);

    /* Logic for adding a checkbox to the new Task List Item to indicate
     whether the task is/is not complete and update the object in the TaskList array. */
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox"
    checkBox.name = "isComplete"
    checkBox.id = newTask.ID
    checkBox.onclick = taskList.completeTask
    newTaskListItem.appendChild(checkBox)

}
