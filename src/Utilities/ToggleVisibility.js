export function toggleListVisibility(listOfItems) {
  document.getElementById('active-list').classList.remove('visible');
  for(const task of listOfItems) {
    if(task.set === 'active-list') {
      document.getElementById('active-list').classList.add('visible');
    }
  }
}
