import React, {useState}  from  'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE=[ 
    {
        id:'e1',
        title:'School Fee',
        amount:250,
        date:new Date(2022,5,21)
    },
    {
        id:'e2',
        title:'Books',
        amount:230,
        date:new Date(2022,5,22)
    },
    {
        id:'e3',
        title:'House Rent',
        amount:700,
        date:new Date(2022,5,2)
    },
    {
        id:'e4',
        title:'Food',
        amount:600,
        date:new Date(2022,5,23)
    }
];

const App = () => {
    const [expenses,setExpenses]=useState(DUMMY_EXPENSE)

    const addExpenseHandler=(expense)=>{
        const updatedExpense=[expense,...expenses];
        setExpenses(updatedExpense)
    }
     
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>   
    )
}

export default App;
