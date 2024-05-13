let transactions = [];

function addTransaction() {
  const income = parseFloat(document.getElementById('income').value);
  const expense = parseFloat(document.getElementById('expense').value);
  const description = document.getElementById('description').value;
  const date = new Date().toLocaleString();

  const transaction = {
    income: income,
    expense: expense,
    description: description,
    date: date
  };

  transactions.push(transaction);

  updateSummary();
  updateTransactions();
}

function updateSummary() {
  const totalIncome = transactions.reduce((acc, curr) => acc + curr.income, 0);
  const totalExpense = transactions.reduce((acc, curr) => acc + curr.expense, 0);
  const savings = totalIncome - totalExpense;

  document.getElementById('totalIncome').innerText = totalIncome;
  document.getElementById('totalExpense').innerText = totalExpense;
  document.getElementById('savings').innerText = savings;
}

function updateTransactions() {
  const transactionList = document.getElementById('transactionList');
  transactionList.innerHTML = '';

  transactions.slice(-5).forEach(transaction => {
    const li = document.createElement('li');
    li.textContent = `${transaction.date} - ${transaction.description} - Income: ${transaction.income}, Expense: ${transaction.expense}`;
    transactionList.appendChild(li);
  });
}
