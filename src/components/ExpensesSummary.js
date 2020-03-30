import React from 'react';
import { connect } from 'react-redux';
import expensesSelector from '../selectors/expenses';
import expensesSum from '../selectors/expenses-total';
import numeral from 'numeral'

export const ExpensesSummary = props => (
    <div>
       <p>Viewing {props.expensesLength} {props.expensesLength > 1 ? 'expenses' : 'expense' } totalling {numeral(props.sum/100).format('$0,0.00')} </p>
    </div>
);

const mapStateToProps = state => {
    return {
        expensesLength : expensesSelector(state.expenses, state.filters).length,
        sum:expensesSum(state.expenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);