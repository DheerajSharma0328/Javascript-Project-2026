const addTransaction = document.querySelector('.add-transaction');
const transactionList = document.querySelector('.transaction-list');
const recentTransactionClearButton = document.querySelector('.clear-all-button');
const currentBalance = document.querySelector('.current-balance');
const totalIncome = document.querySelector('.total-income');
const totalExpense = document.querySelector('.total-expense');
const totolTransaction = document.querySelector('.totol-transaction');




const storedData = localStorage.getItem('data');
const balanceDataValue = localStorage.getItem('balanceData');
const storedCategoryData =localStorage.getItem("categoryData");

const data = storedData ? JSON.parse(storedData) : [];
const balanceData = balanceDataValue ? JSON.parse(balanceDataValue) : {
    income: 0,
    expense: 0,
    balance: 0,
    transactions: 0
};
const categoryData = storedCategoryData
    ? JSON.parse(storedCategoryData)
    : {
        Food: {
            amount: 0,
            transactions: 0
        },

        Travel: {
            amount: 0,
            transactions: 0
        },

        Shopping: {
            amount: 0,
            transactions: 0
        },

        Bills: {
            amount: 0,
            transactions: 0
        },

        Entertainment: {
            amount: 0,
            transactions: 0
        },
        Salary: {
            amount: 0,
            transactions: 0
        },
        FreeLancing: {
            amount: 0,
            transactions: 0
        },

        Other: {
            amount: 0,
            transactions: 0
        }
    };
recentTransaction();
renderBalance();
renderCategory()


addTransaction.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(addTransaction);

    const transaction = {
        id: crypto.randomUUID(),
        title: formData.get('title'),
        amount: Number(formData.get('amount')),
        category: formData.get('category-input-value'),
        type: formData.get('type-input'),
        date: formData.get('date-input-value'),
    };


    data.push(transaction);
    localStorage.setItem('data', JSON.stringify(data));
    recentTransaction();
    category(formData);
    
    balance(formData);
    addTransaction.reset();

})

function recentTransaction() {
    transactionList.innerHTML = "";
    data.forEach((recentTransactionData, index) => {
        const row = document.createElement('div');
        row.classList.add('transaction-row');

       
        row.innerHTML = `
    <div class="transaction-id">
        <span class="transaction-span">ID:</span>
        <span>${index + 1}</span>
    </div>

    <div class="transaction-title">
        <span class="transaction-span">Title:</span>
        <span>${recentTransactionData.title}</span>
    </div>

    <div class="transaction-category">
        <span class="transaction-span">Category:</span>
        <span>${recentTransactionData.category}</span>
    </div>

    <div class="transaction-amount">
        <span class="transaction-span">Amount:</span>
        <span>₹${recentTransactionData.amount}</span>
    </div>

    <div class="transaction-type">
        <span class="transaction-span">Type:</span>
        <span>${recentTransactionData.type}</span>
    </div>

    <div class="transaction-date">
        <span class="transaction-span">Date:</span>
        <span>${recentTransactionData.date}</span>
    </div>

    <div class="transaction-actions">
        <select class="modify-transaction">
            <option value="" selected disabled>Modify</option>
            <option value="delete">Delete</option>
            <option value="edit">Edit</option>
        </select>
    </div>
`;

        transactionList.appendChild(row)
    })
}



recentTransactionClearButton.addEventListener('click', function (event) {
    data.length = 0;

    balanceData.income = 0;
    balanceData.expense = 0;
    balanceData.balance = 0;
    balanceData.transactions = 0;

    Object.keys(categoryData).forEach(function (category) {
z
        categoryData[category].amount = 0;
        categoryData[category].transactions = 0;

    });

    localStorage.removeItem('data');
    localStorage.removeItem('balanceData');
    localStorage.removeItem('categoryData');

    recentTransaction();
    renderBalance();
    renderCategory();

});

function renderBalance() {
    totalIncome.innerText = balanceData.income;
    totalExpense.innerText = balanceData.expense;
    currentBalance.innerText = balanceData.balance;
    totolTransaction.innerText = balanceData.transactions;
}

function balance(formData) {

    const amount = Number(formData.get('amount'));
    const type = formData.get('type-input');
    
    if (type === 'income') {
        
        balanceData.income += amount;
        balanceData.balance += amount;
        
    }
    
    if (type === 'expense') {
        balanceData.expense += amount;
        balanceData.balance -= amount;
        
    }
    
    balanceData.transactions += 1;
    saveBalance();
    renderBalance();
}


function saveBalance() {
    localStorage.setItem('balanceData', JSON.stringify(balanceData))
}

function category(formData)
{
    const amount = Number(formData.get('amount'));
    const category = formData.get('category-input-value');

    categoryData[category].amount += amount;
    categoryData[category].transactions += 1;
    saveCategoryData();
    renderCategory()

}


function saveCategoryData() {

    localStorage.setItem('categoryData',JSON.stringify(categoryData));

}



function renderCategory() {

    // Food
    document.querySelector('.food-spent-amount').innerText =
        categoryData.Food.amount;

    document.querySelector('.food-total-transaction-number').innerText =
        categoryData.Food.transactions;


    // Travel
    document.querySelector('.travel-spent-amount').innerText =
        categoryData.Travel.amount;

    document.querySelector('.travel-total-transaction-number').innerText =
        categoryData.Travel.transactions;


    // Shopping
    document.querySelector('.shopping-spent-amount').innerText =
        categoryData.Shopping.amount;

    document.querySelector('.shopping-total-transaction-number').innerText =
        categoryData.Shopping.transactions;


    // Bills
    document.querySelector('.bills-spent-amount').innerText =
        categoryData.Bills.amount;

    document.querySelector('.bills-total-transaction-number').innerText =
        categoryData.Bills.transactions;


    // Entertainment
    document.querySelector('.entertainment-spent-amount').innerText =
        categoryData.Entertainment.amount;

    document.querySelector('.entertainment-total-transaction-number').innerText =
        categoryData.Entertainment.transactions;


    // Salary
    document.querySelector('.salary-spent-amount').innerText =
        categoryData.Salary.amount;

    document.querySelector('.salary-total-transaction-number').innerText =
        categoryData.Salary.transactions;


    // FreeLancing
    document.querySelector('.freelancing-spent-amount').innerText =
        categoryData.FreeLancing.amount;

    document.querySelector('.freelancing-total-transaction-number').innerText =
        categoryData.FreeLancing.transactions;


    // Other
    document.querySelector('.other-spent-amount').innerText =
        categoryData.Other.amount;

    document.querySelector('.other-total-transaction-number').innerText =
        categoryData.Other.transactions;

}