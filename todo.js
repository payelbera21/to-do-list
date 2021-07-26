import { LightningElement, wire, track,api } from 'lwc';

export default class Todo extends LightningElement {
     @track 
    toDoTask = []
    newTask = ""
    updateNewTask(event){
       
       this.newTask =  event.target.value
       
    }
    addTaskToList(event){
        
        this.toDoTask.unshift({
            id:this.toDoTask.length +1,
            name:this.newTask  
        })
        this.newTask = ''
    }
    deleteTaskFromList(event){
        let idToDelete = event.target.name;
        
        let toDoTaskIndex;
        for(let i=0;i<this.toDoTask.length;i++){
            
            if(idToDelete === this.toDoTask[i].id){
               toDoTaskIndex =i
            }
        } 
        this.toDoTask.splice(toDoTaskIndex,1)

          /* this.toDoTask.splice(this.toDoTask.findIndex(function(){
            return toDoTask.id === idToDelete
        }),1) */  
    }
}