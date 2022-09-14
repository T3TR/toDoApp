class Task {
    constructor( taskName, dueDate, optDescr, ID, isComplete ){
        this._taskName = taskName;
        this._dueDate = dueDate;
        this._optDescr = optDescr;
        this._ID = ID;
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
    completed(checked){
        if (checked === true){
            console.log("True")
            this._isComplete = true
        }
        else{
            this._isComplete = false
            console.log("False")
        }
    }
}

export { Task };
