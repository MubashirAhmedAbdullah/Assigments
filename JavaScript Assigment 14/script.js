const todos = [

]
console.log(todos);


const todoInputField = document.getElementById('todoInputField');
const addButton = document.getElementById('addButton');
const data = document.getElementById('data');
const date = new Date().toDateString();
// console.log(date.getDate);

console.log(date);



addButton.addEventListener('click', () => {
   if (todoInputField.value) {
      console.log(todoInputField.value);
      todos.push = todoInputField.value;
      console.log(todos, todos.length);

      data.innerHTML += `<tr>
      <td>${todoInputField.value}</td>
      <td>${date}</td>
      </tr>`;

      //    todos.forEach(data, ind)

      todoInputField.value = "";
   }
   else{
      alert('Please enter a todo item')
   }
})















