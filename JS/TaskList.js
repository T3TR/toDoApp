import { Task } from "./Task.js";

class TaskList {
    constructor(){
        this._Tasks = []
        this._Count = 0
    }

    //Proporties
    get Tasks(){
        return this._Tasks
    }

    //Methods
    createNewTask(newTaskName, newDueDate, newDescription){
        let newID = ++this._Count
        let newCompleteStatus = false
    
        let newTask = new Task(newTaskName, newDueDate, newDescription, newID, newCompleteStatus)
        
        this.Tasks.push(newTask)
        return newTask
    }
    
}

export { TaskList };
