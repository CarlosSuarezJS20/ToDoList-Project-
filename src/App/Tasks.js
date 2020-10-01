import { toggleListVisibility } from '../Utilities/ToggleVisibility';
import {showDeletionCard } from '../Utilities/deletionCard';

export const allTasks = []; 

export class Task {
  constructor(taskDescription, set) {
    this.taskTemplateEl = document.getElementById('task-template');
    this.doneTemplateEl = document.getElementById('done-template'); 
    this.text = taskDescription; 
    this.set = set;
    this.id = idGeneration.next().value
    this.html = this.generateTaskHTML();       
  }

  generateTaskHTML() {
    const taskTemplateElement = document.importNode(this.taskTemplateEl.content, true); 
    const taskElement = taskTemplateElement.querySelector('div'); 
    taskElement.id = `li-${this.id}`; 
    taskElement.draggable = true; 
    taskElement.querySelector('h2').textContent = this.text; 
    const itemButtonsAccess = taskElement.querySelectorAll('button')
    const doneBtnAccess = itemButtonsAccess[0]; 

    doneBtnAccess.addEventListener('click', () => {
      this.set = 'done-list'; 
      const doneHTMLEl = document.importNode(this.doneTemplateEl.content, true);
      const doneEl = doneHTMLEl.querySelector('div'); 
      doneEl.id = `li-${this.id}`; 
      doneEl.querySelector('h2').textContent = this.text; 
      const reactivateBtn = doneEl.querySelector('button'); 
      const deleteTaskPerm = reactivateBtn.nextElementSibling; 
    
      reactivateBtn.addEventListener('click', () => {
        document.getElementById(doneEl.id).remove(); 
        this.set ='active-list';
        document.getElementById('active-list').append(this.html); 
        document.getElementById('done-list').classList.remove('visible'); 
        toggleListVisibility(allTasks); 
      });

      deleteTaskPerm.addEventListener('click', () => {
        showDeletionCard(this.id, doneEl); 
      });

      document.getElementById(this.set).append(doneEl); 
      taskElement.remove(); 
      toggleListVisibility(allTasks); 
    }); 
    
    const deleteBtnAccess = itemButtonsAccess[1];
    deleteBtnAccess.addEventListener('click', () => {
      const findTask = allTasks.find(task => task.id === this.id); 
      findTask.set = 'cancel-list';
      taskElement.remove();  
    });

    taskElement.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', this.id);
      event.dataTransfer.effectAllowed = 'move'; 
    });
    return taskElement; 
  }
} 

// This function provides the task id that will be added to the li element upon creation. 
function* taskId() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
        
const idGeneration = taskId(); 

