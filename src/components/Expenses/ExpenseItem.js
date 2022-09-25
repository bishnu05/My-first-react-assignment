import React, {useState} from  'react';
import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card'

const ExpenseItem=(props)=>{
    
//   const [title,setTitle] = useState(props.title);

//   const [newtitle,setnewTitle] = useState("");

//     const clickHandler=()=>{
//         // alert("clicked")
//         setTitle(newtitle)
//     }
//     const changeHandler=(event)=>{
//         setnewTitle(event.target.value);
//     }
     return (
        <Card className="expense-item">
            <ExpenseDate date={new Date(props.date)}/>
            <div className='expense-item__description'>
                <h2>{ props.title }</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <input type="text" value={newtitle} onChange={changeHandler}/>
            <button onClick={ clickHandler }>Change Title</button> */}
        </Card>
     );
}

export default ExpenseItem;