


document.getElementById('addIncome').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) return;

    const incomeDisplay = document.getElementById('incomeDisplay');
    let currentIncome = parseFloat(incomeDisplay.textContent.replace('Income: $', ''));
    currentIncome += amount;
    incomeDisplay.textContent = `Income: $${currentIncome}`;

    updateSavings();
    document.getElementById('amount').value = '';
});

document.getElementById('addExpense').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) return;

    const expenseDisplay = document.getElementById('expenseDisplay');
    let currentExpenses = parseFloat(expenseDisplay.textContent.replace('Expenses: $', ''));
    currentExpenses += amount;
    expenseDisplay.textContent = `Expenses: $${currentExpenses}`;

    updateSavings();
    document.getElementById('amount').value = '';
});

function updateSavings() {
    const income = parseFloat(document.getElementById('incomeDisplay').textContent.replace('Income: $', ''));
    const expenses = parseFloat(document.getElementById('expenseDisplay').textContent.replace('Expenses: $', ''));
    const savings = income - expenses;

    document.getElementById('savingsDisplay').textContent = `Savings: $${savings}`;
}
