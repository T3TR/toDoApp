import { TaskList } from "./TaskList.js";
import { Task } from "./Task.js";



const renderTask = (newTask) => {

    // Logic for adding Tasks from the TaskList to the HTML ul element and display them.
    const taskItemsList = document.getElementById("taskItemsList");
    const newTaskListItem = document.createElement("li");
    newTaskListItem.id = newTask.ID;
    newTaskListItem.classList = "listItem";
    newTaskListItem.textContent = newTask.taskName +" "+ newTask.optDescr +" "+ newTask.dueDate;
    taskItemsList.appendChild(newTaskListItem);

    /* Logic for adding a checkbox to the new Task List Item to indicate
    whether the task is/is not complete and update the object in the array. */
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.name = "Complete";
    checkBox.classList = "checkBox";

    if(newTask.isComplete == true){
        checkBox.checked = true
        newTaskListItem.style.textDecoration = "line-through";
    }
    else{
        checkBox.checked = false
        newTaskListItem.style.textDecoration = "";
    }

    checkBox.addEventListener("click", () => {
        if (newTask.isComplete == false) {
            newTask.isComplete = true;
            newTaskListItem.style.textDecoration = "line-through";
        }
        else {
            newTask.isComplete = false;
            newTaskListItem.style.textDecoration = "";
        }
    });
    newTaskListItem.appendChild(checkBox);

    /* Edit Task functionality with multiple prompts for new user inputs to replace previous data.
    Updates the list elements text content and appends the other functionalities back to it. */
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.name = "Edit";
    editButton.classList = "editButton";

    editButton.addEventListener("click", () => {
        let editTaskName = prompt("Please enter the new task name :", newTask.taskName);
        let editDueDate = prompt("Please enter the new due date as yyyy/mm/dd :", newTask.dueDate );
        let editDescription = prompt("Enter an new optional description :", newTask.optDescr);

        newTask.taskName = editTaskName;
        newTask.dueDate = editDueDate;
        newTask.optDescr = editDescription;
        newTaskListItem.textContent = editTaskName +" "+ editDescription +" "+ editDueDate;
        newTaskListItem.appendChild(checkBox);
        newTaskListItem.appendChild(editButton);
        newTaskListItem.appendChild(deleteButton);
    });
    newTaskListItem.appendChild(editButton);

    /* Delete Task functionality, adds a new button that hides the list element and
    removes the object from the array. */
    const deleteButton = document.createElement("Button");
    deleteButton.textContent = "Delete";
    deleteButton.name = "Delete";
    deleteButton.classList = "deleteButton";
    deleteButton.addEventListener("click", () => {
        document.getElementById(newTask.ID).style.display = "none";
        newTask.deleteItem(newTask.ID);
    });
    newTaskListItem.appendChild(deleteButton);

    //List order for the components of each list item. i.e : checkbox, inner text and buttons.

}

// Logic for creating new Tasks and adding them to the TaskList.
window.onClickAdd = function(e){

    e.preventDefault();
    let newTaskName = document.getElementById('TaskName').value;
    let newDueDate = document.getElementById('DueDate').value;
    let newDescription = document.getElementById('Description').value;

    let newTask = taskList.createNewTask(newTaskName, newDueDate, newDescription);
    console.log(taskList);

    renderTask(newTask);
    
}

window.save = function(){

    localStorage.setItem(
        "savedTasks",
        JSON.stringify(taskList)
    )

};

let taskList;

const load = localStorage.getItem("savedTasks");
if(load != null){
    let loaded = JSON.parse(load);
    taskList = new TaskList(loaded._Tasks, loaded._Count);
    taskList.Tasks.forEach(task => {
        renderTask(task);
    });
}
else{
    taskList = new TaskList();
}

export { taskList };
