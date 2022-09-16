import { taskList } from "./toDoApp.js";

class Task {
    constructor( taskName, dueDate, optDescr, ID, isComplete ){
        this._taskName = taskName;
        this._dueDate = dueDate;
        this._optDescr = optDescr;
        this._ID = ID;
        this._isComplete = isComplete;
    }

    //Getters and Setters
    get taskName(){
        return this._taskName
    }
    get ID(){
        return this._ID
    }
    get dueDate(){
        return this._dueDate
    }
    get optDescr(){
        return this._optDescr
    }
    get isComplete(){
        return this._isComplete 
    }


    set isComplete(value){
            this._isComplete = value
    };
    

    //Methods
    completed(event){
        let checked = event.target.checked
        let checkBoxID = event.target.id
        let taskIndex = checkBoxID - 1
        //let arrayIndex = taskList.findIndex((newTask => newTask.ID == taskID))
        if (checked === true){
            console.log(checkBoxID, taskIndex)
            taskList[taskIndex].isComplete = true;
            console.log("True");

            }
        else{
            taskList[taskIndex].isComplete = false;
            console.log("False");
        }
    }
    
}

export { Task };
