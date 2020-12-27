# Read Me

> This read.me file intends to explain the main fundamentals and approaches I undertook during the development of this project.

---

### Table of Contents

- [Description ](#description)
- [Technologies and Dependencies](#technologies-and-dependencies)
- [License](#license)
- [Author Info](#author-info)

---

## Description

This project helps users to, not only, pinpoint their daily task, but also allows them to segment them in different priorities buckets. To make the transition from one priority list to another, I included a drag and drop capability so users can quickly move tasks, receiving instant feedback from the UI.

## Technologies and Dependencies

- JavaScript (Object-Orientated-Programming)
- CSS
- HTML
- Webpack
- EsLintrc

Some of the practice opporunities were:

- Event handling
- This keyword understanding
- class and constructor manipulation

[Back To The Top](#read-me)

### Drag and Drop snipped example

Below, see example of the snipped for the drag and drop capability:

```dragAndDrop() {
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
```

---

## License

MIT License

Copyright (c) [2020] [Carlos Suarez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PUxwPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#read-me)

---

## Author Info

- LinkedIn - [Link](https://www.linkedin.com/in/carlos-suarez-msc-a3659141/)
- Website - [my-portfolioweb](https://my-portfolio-27903.web.app/portfolio/)

[Back To The Top](#read-me)
