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
    completed(){
        this.isComplete = true
    }
}

class TaskList {
    constructor( ){
        this._Tasks = []
        this._Count = 0
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
        this.Tasks.push(newTask)
    }
}

const taskList = new TaskList( )

function onclickAdd(e){
    e.preventDefault();
    let newTaskName = document.getElementById('TaskName').value
    let newDueDate = document.getElementById('DueDate').value
    let newDescription = document.getElementById('Description').value

    taskList.createNewTask(newTaskName, newDueDate, newDescription)
    console.log(taskList)
}