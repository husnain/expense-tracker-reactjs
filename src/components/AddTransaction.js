import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
    
    const onsubmit = e => {
      e.preventDefault();
      
      const newTransaction = {
        id: Math.floor(Math.random() * 10000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction)
    }
    return (
      <>
        <h3>Record New Transaction</h3>
        <form id="form" onSubmit={onsubmit}>
          <div className="form-control">
            <label htmlFor="text">Transaction Name</label>
            <input type="text" value={text} onChange = {(e) => setText(e.target.value)} id="text" placeholder="Transaction Name..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount <br /><i>(negative is expense and positive is income)</i></label>
            <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </>
    )
}
