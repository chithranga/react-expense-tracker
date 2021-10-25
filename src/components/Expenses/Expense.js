import React, {useState} from "react";
import "./Expense.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props)=>{
    const [filterYear, setFilterYear] = useState('2020');
    const  filterChangeHandler = (selectedYear) =>{
        setFilterYear(selectedYear);

    }

    const filteredExpenses = props.items.filter((expense) =>
        {
            return ( expense.date.getFullYear().toString() === filterYear);
        });

    

    return(
    <Card className="expenses">   
        <ExpensesFilter selected={filterYear} onChangeFilter ={filterChangeHandler}/> 
        <ExpensesChart expenses ={filteredExpenses}/>      
        <ExpensesList items={filteredExpenses}/>  
          
       
    </Card>

    );

}

export default Expenses;