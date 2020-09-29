import { allTasks } from '../App/Tasks';

const backDropAccess = document.getElementById('backdrop');
const deletePermCard = document.getElementById('delete-modal');
const deletionCardCancelAccess = document.querySelector('.btn--passive')
const deletionCardYesAccess = document.querySelector('.btn--danger')


export function showDeletionCard(taskId, htmlEl) {
  toggleDeletionCard(); 
  deletionCardCancelAccess.addEventListener('click', () => {
   toggleDeletionCard(); 
  }); 

  deletionCardYesAccess.addEventListener('click', () => {
    const taskIndex = allTasks.findIndex(task => task.id === taskId); 
    allTasks.splice(taskIndex, 1); 
    htmlEl.remove(); 
    document.getElementById('done-list').classList.remove('visible');
    backDropAccess.classList.remove('visible'); 
    deletePermCard.classList.remove('visible');
  });   
}      

function toggleDeletionCard() { 
  backDropAccess.classList.toggle('visible'); 
  deletePermCard.classList.toggle('visible'); 
} 