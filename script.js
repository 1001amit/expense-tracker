document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = document.getElementById('expense-amount').value;

    if (expenseName && expenseAmount) {
        const expenseList = document.getElementById('expense-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${expenseName}: $${expenseAmount}`;
        expenseList.appendChild(listItem);

        document.getElementById('expense-form').reset();
    }
});
