class Task {
    constructor( taskName, ID, dueDate, optDescr, isComplete ){
        this._taskName = taskName;
        this._ID = ID;
        this._dueDate = dueDate;
        this._optDescr = optDescr;
        this._isComplete = isComplete;
    }

    //Proporties
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

    //Methods
    completed(){
        this.isComplete = true
    }
}

export default Task;