import { allTasks } from './Tasks';

export class PriorityLists {
	constructor(listName, hook) {
		this.listName = listName;
		this.root = hook;
		this.renderList();
	}

	renderList() {
		const listElement = document.createElement('ul');
		listElement.id = this.listName;
		listElement.className = 'card';
		document.getElementById(this.root).append(listElement);
		this.dragAndDrop();
	}

	dragAndDrop() {
		const listAccess = document.getElementById(this.listName);

		listAccess.addEventListener('dragenter', (event) => {
      event.preventDefault();
      
			listAccess.parentElement.classList.add('droppable');
		});

		listAccess.addEventListener('dragover', (event) => {
			event.preventDefault();
		});

		listAccess.addEventListener('dragleave', (event) => {
			event.preventDefault();
			listAccess.parentElement.classList.remove('droppable');
		});

		listAccess.addEventListener('drop', (event) => {
			const taskId = parseInt(event.dataTransfer.getData('text/plain'));
			const taskFound = allTasks.find((task) => task.id === taskId);
			taskFound.set = this.listName;
			document.getElementById(taskFound.set).append(taskFound.html);
			listAccess.parentElement.classList.remove('droppable');
		});
	}
}
