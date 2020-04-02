import React from 'react';
import { connect } from 'react-redux';
import expensesSelector from '../selectors/expenses';
import expensesSum from '../selectors/expenses-total';
import numeral from 'numeral'

export const ExpensesSummary = props => (
    <div>
       <h1>Viewing {props.expensesLength} {props.expensesLength > 1 ? 'expenses' : 'expense' } totalling  { props.expensesLength !== 0 ? numeral(props.sum/100).format('$0,0.00') : '0' } </h1>
    </div>
);

const mapStateToProps = state => {
    return {
        expensesLength : expensesSelector(state.expenses, state.filters).length,
        sum:expensesSum(state.expenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);