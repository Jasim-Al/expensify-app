import React, { Component } from 'react';
import { connect } from 'react-redux';
import expensesSelector from '../selectors/expenses';
import expensesSum from '../selectors/expenses-total';
import numeral from 'numeral'

const ExpensesSummary = props => (
    <div>
       <p>Viewing {props.expensesLength} {props.expensesLength > 1 ? <span> expenses </span> : <span> expense </span>} totalling {numeral(props.sum/100).format('$0,0.00')} </p>
    </div>
);

const mapStateToProps = state => {
    return {
        expensesLength : expensesSelector(state.expenses, state.filters).length,
        sum:expensesSum(state.expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)