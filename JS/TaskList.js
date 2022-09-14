import { Task } from "./Task.js";

class TaskList {
    constructor(){
        this._Tasks = []
        this._Count = 1
    }

    //Proporties
    get Tasks(){
        return this._Tasks
    }

    //Methods
    createNewTask(newTaskName, newDueDate, newDescription){
        let newID = this._Count++
        let newCompleteStatus = false
    
        let newTask = new Task(newTaskName, newDueDate, newDescription, newID, newCompleteStatus)
        debugger
        this.Tasks.push(newTask)
        return newTask
    }
    completeTask(event){
        let checked = event.target.checked
        let checkBoxID = event.target.id
        let arrayIndex = checkBoxID - 1
        console.log(this._Tasks)
        this.Tasks[arrayIndex].completed(checked)

    }
}

export { TaskList };
