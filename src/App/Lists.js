import { PriorityLists } from './PriorityLists';

export class Lists {
	constructor() {
		this.inIt();
	}

	inIt() {
		new PriorityLists('high-priority-list', 'high-prior-list');
		new PriorityLists('medium-priority-list', 'mid-prior-list');
		new PriorityLists('low-priority-list', 'low-prior-list');
	}
}
