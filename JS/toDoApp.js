import Task from "./Task"
import taskList from "./taskList"

function createNewTask(){
    let newTaskName = document.getElementById('TaskName').value
    let newDueDate = document.getElementById('DueDate').value
    let newDescription = document.getElementById('Description').value

    let newTask = new Task(newTaskName, newDueDate, newDueDate)
}