document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task');
    const task = taskInput.value;

    if (task === '') {
        alert('Please fill in the task');
        return;
    }

    const todoList = document.getElementById('todo-list');
    
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const formattedTime = (date.toLocaleTimeString());

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${task}</td>
        <td>${formattedDate}</td>
        <td>${formattedTime}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;
    
    todoList.appendChild(row);
    
    taskInput.value = '';
    
    row.querySelector('.delete-btn').addEventListener('click', function() {
        row.remove();
    });
});
