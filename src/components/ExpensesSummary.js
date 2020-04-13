import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'
import { Link } from 'react-router-dom';
import expensesSelector from '../selectors/expenses';
import expensesSum from '../selectors/expenses-total';


export const ExpensesSummary = props => (
    <div className = 'page-header'>
        <div className = 'content-container'>
            <h1 className = 'page-header__title'>Viewing <span> {props.expensesLength} </span>{props.expensesLength > 1 ? 'expenses' : 'expense' } totalling <span> { props.expensesLength !== 0 ? numeral(props.sum/100).format('$0,0.00') : '0' } </span> </h1>
            <div className = 'page-header__actions'>
                <Link className = 'button' to ='/create' >Add Expense</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => {
    return {
        expensesLength : expensesSelector(state.expenses, state.filters).length,
        sum:expensesSum(state.expenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);