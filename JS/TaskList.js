import { Task } from "./Task.js";

class TaskList {
    constructor(tasks, count){
        if(tasks){
            this._Tasks = tasks.map(task => {
                return new Task(task._taskName, task._dueDate, task._optDescr, task._ID, task._isComplete)
            });
        }
        else{
            this._Tasks = []
        }
        if(count){
            this._Count = count
        }
        else{
            this._Count = 0
        }

    }

    //Getters and Setters
    get Tasks(){
        return this._Tasks
    }
    get Count(){
        return this._Count
    }

    set Tasks(value){
        this._Tasks = value
    }
    set Count(value){
        this._Count = value
    }


    //Methods
    createNewTask(newTaskName, newDueDate, newDescription){
        let newID = ++this._Count
        let newCompleteStatus = false
    
        let newTask = new Task(newTaskName, newDueDate, newDescription, newID, newCompleteStatus)
        
        this.Tasks.push(newTask)
        return newTask
    }
    deleteItem(itemId) {
        this.Tasks = this.Tasks.filter(item => item.ID != itemId)
    }
}

export { TaskList };
