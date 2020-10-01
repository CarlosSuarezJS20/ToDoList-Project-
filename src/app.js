// import { Task, allTasks } from './App/Tasks'; 
import { allTasks } from './App/Tasks.js'; 
import { toggleListVisibility } from './Utilities/ToggleVisibility'; 
import { Lists } from './App/Lists'; 

class TaskBuilder {

  constructor() {
    const addTaskBtn = document.getElementById('add-item-btn'); 
    const doneButtonList = document.getElementById('done-btn');
    doneButtonList.addEventListener('click', () => {
  document.getElementById('done-list').classList.toggle('visible'); 
})

    this.userInputAccess = document.getElementById('item');
    this.listOfTask = allTasks; 
    this.lists = new Lists(); 

    addTaskBtn.addEventListener('click', this.createTask.bind(this)); 
  }     

  createTask() {
    if(this.userInputAccess.value.trim() === '') {
      alert('You need to add a task!'); 
      return; 
    }
    import('./App/Tasks').then(module => {

      const newTask = new module.Task(this.userInputAccess.value, 'active-list');  //new module.task 
      this.userInputAccess.value = ''; 
      this.listOfTask.push(newTask); 
      document.getElementById(newTask.set).append(newTask.html); 
      toggleListVisibility(this.listOfTask);   
    })
  }
}
      
new TaskBuilder(); 
