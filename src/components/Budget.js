import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Currency } from '../components/Currency';

const Budget = () => {
	const { currency,budget,dispatch,expenses } = useContext(AppContext);

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
        if(budget>=20000) {
            alert("You cannot exceed 20,000")
            budget=20000;
        }
    }   
	return (
		<div className='alert alert-secondary'>
		<span>{currency}</span>	<input type="number" step="10" max="20000" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
		</div>
	);
};

export default Budget;
