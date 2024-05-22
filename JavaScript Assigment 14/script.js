document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <div>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
            taskInput.value = '';

            const editButton = li.querySelector('.edit');
            const deleteButton = li.querySelector('.delete');
            
            editButton.addEventListener('click', () => editTask(li));
            deleteButton.addEventListener('click', () => deleteTask(li));
        }
    }

    function editTask(taskItem) {
        const span = taskItem.querySelector('span');
        const taskText = span.textContent;
        const newTaskText = prompt('Edit your task:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            span.textContent = newTaskText.trim();
        }
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
