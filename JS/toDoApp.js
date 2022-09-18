import { TaskList } from "./TaskList.js";
import { Task } from "./Task.js";


// Logic for creating new Tasks and adding them to the TaskList.
const taskList = new TaskList()

window.onClickAdd = function(e){

    e.preventDefault();
    let newTaskName = document.getElementById('TaskName').value;
    let newDueDate = document.getElementById('DueDate').value;
    let newDescription = document.getElementById('Description').value;

    let newTask = taskList.createNewTask(newTaskName, newDueDate, newDescription);
    console.log(taskList);

    // Logic for adding Tasks from the TaskList to the HTML ul element and display them.
    const taskItemsList = document.getElementById("taskItemsList");
    const newTaskListItem = document.createElement("li");
    newTaskListItem.id = newTask.ID;
    newTaskListItem.textContent = newTask.taskName +" "+ newTask.optDescr +" "+ newTask.dueDate;
    taskItemsList.appendChild(newTaskListItem);


    /* Logic for adding a checkbox to the new Task List Item to indicate
     whether the task is/is not complete and update the object in the array. */
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.name = "isComplete";
    checkBox.id = newTask.ID;

    let checkBoxID = newTask.ID
    let checkBoxToggle = document.getElementById(checkBoxID)

    checkBoxToggle.addEventListener("click", () => {
            if (newTask.isComplete == false) {
                newTask.isComplete = true;
            }
            else {
                newTask.isComplete = false;
            }
        });
    newTaskListItem.appendChild(checkBox);

    // Edit Task functionality
    const editButton = document.createElement("button");
    editButton.textContent = "Edit"
    editButton.name = "Edit";
    editButton.id = newTask.ID
    editButton.addEventListener("click", () => {
        let editTaskName = prompt("Please enter the new task name :", newTaskName);
        let editDueDate = prompt("Please enter the new due date as yyyy/mm/dd :", newDueDate);
        let editDescription = prompt("Enter an new optional description :", newDescription);

        newTask.taskName = editTaskName;
        newTask.dueDate = editDueDate;
        newTask.optDescr = editDescription;
        newTaskListItem.textContent = editTaskName +" "+ editDescription +" "+ editDueDate;
        newTaskListItem.appendChild(checkBox);
        newTaskListItem.appendChild(editButton);
    });
    newTaskListItem.appendChild(editButton)
    
}

export { taskList };
