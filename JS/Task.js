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

    set taskName(value){
        this._taskName = value
    }
    set dueDate(value){
        this._dueDate = value
    }
    set optDescr(value){
        this._optDescr = value
    }
    set isComplete(value){
            this._isComplete = value
    };
    

    //Methods
    
}

export { Task };
