
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {  
        const saveExpenseDataHandel = (enteredExpenseDate) =>{
            const expenseData = {
                ...enteredExpenseDate,
                id : Math.random().toString()
            };
            //console.log(expenseData);
            props.onAddExpense(expenseData);
            
        };  
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandel}/>
            </div>
        );   
};

export default NewExpense;
