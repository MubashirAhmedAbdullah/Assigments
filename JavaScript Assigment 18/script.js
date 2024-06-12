



const todosInputField = document.getElementById('todos_input_field');
const filterDropdown = document.getElementById('filter_dropdown');
const categoryDropdown = document.getElementById('category_dropdown');
const addTodosButton = document.getElementById('addtodos');
const todosTableBody = document.getElementById('todo\'s');


let todos = [];


addTodosButton.addEventListener('click', addTodo);


filterDropdown.addEventListener('change', filterTodos);

function addTodo() {
  const todoText = todosInputField.querySelector('input[type="text"]').value.trim();
  const category = categoryDropdown.value;
  const todo = {
    text: todoText,
    category: category,
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  };
  todos.push(todo);
  displayTodos();
  todosInputField.querySelector('input[type="text"]').value = '';
}


function filterTodos() {
  const filterValue = filterDropdown.value;
  const filteredTodos = todos.filter(todo => todo.category === filterValue);
  displayTodos(filteredTodos);
}


function displayTodos(todosToDisplay = todos) {
  todosTableBody.innerHTML = '';
  todosToDisplay.forEach((todo, index) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${index + 1}</td>
      <td>${todo.text}</td>
      <td>${todo.category}</td>
      <td>${todo.time}</td>
      <td>${todo.date}</td>
    `;
    todosTableBody.appendChild(tableRow);
  });
}


displayTodos();