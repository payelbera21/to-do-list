import { LightningElement, wire, track,api } from 'lwc';

export default class Todo extends LightningElement {
     @track 
    toDoTask = [
        {id:1,
        name:"task1"},
        
    ]
    newTask = ""
    updateNewTask(event){
       
       this.newTask =  event.target.value
       console.log(this.newTask)
    }
    addTaskToList(event){
        console.log("addTaskToList")
        this.toDoTask.push({
            id:this.toDoTask.length +1,
            name:this.newTask  
        })
        this.newTask = ''
    }
    /*deleteTaskFromList(event){
        let idToDelete = event.target.name;
        toDoTaskIndex;
        for(let i=0;i<this.toDoTask.length;i++){
            if(idToDelete == this.toDoTask[i].id){
                toDoTaskIndex =i
            }
        }
        this.toDoTask.splice(toDoTaskIndex,1)
         this.toDoTask.splice(this.toDoTask.findIndex(function(){
            return toDoTask.id === idToDelete
        }),1) 
    } */
}