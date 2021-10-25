import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');
    const [formSatus, setFormStatus] = useState(false);

    // const [UserInput , setUserInput] = useState({
    //     enterTitle : '',
    //     enterAmount : '',
    //     enterDate : ''
    // })
    const TitleChangeHandler= (event) =>{
        setEnterTitle(event.target.value);
        // setUserInput((prevState) =>{
        //     return {...prevState, enterTitle : event.target.value}
        // });
        //setUserInput({
        //    ...UserInput,
        //    enterTitle : event.taget.value
        //})
        
    };

    const AmountChangeHandler = (event) =>{
        setEnterAmount(event.target.value); 
        //  setUserInput({
        //     ...UserInput,
        //     enterAmount : event.taget.value
        // })    
        
        // setUserInput((prevState) =>{
        //     return {...prevState, enterAmount : event.target.value}
        // });
    };
    
    const DateChangeHandler = (event) =>{
        setEnterDate(event.target.value);
        // setUserInput({
        //     ...UserInput,
        //     enterDate : event.taget.value
        // })

        // setUserInput((prevState) =>{
        //     return {...prevState, enterDate : event.target.value}
        // });
        
    }

    const submitHander = (event) =>{
        event.preventDefault(); 

        const expenseData = {
            title:enterTitle,
            amount:enterAmount,
            date : new Date(enterDate)
        };

        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');

        setFormStatus(false);

    };

    const addHandler = () => {
        setFormStatus(true);
        
    }

    const cancelHandler = () => {
        setFormStatus(false);
        
    }
    
    return (
    <div>
        {
        !formSatus ?
        (
        <div className="new-expense__actions">         
        <button type="submit" onClick={addHandler}>Add Expense</button>
        </div>        
        )  
         :
         (          
        <form onSubmit={submitHander}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enterTitle} onChange={TitleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enterAmount} onChange={AmountChangeHandler} min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enterDate} onChange={DateChangeHandler} min="2019-01-01" max="0.2022-12-31" />
                </div>
            </div>
           
            <div className="new-expense__actions"> 
                <button type="button" onClick={cancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>          

        </form>
        )
        }
    </div>    
    );
}

export default ExpenseForm;