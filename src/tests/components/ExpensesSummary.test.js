import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('render ExpensesSummary with one expense message', () => {
    let wrapper = shallow( <ExpensesSummary expensesLength = { 1 } sum = { 70 } /> );
    expect(wrapper).toMatchSnapshot();
});

test('render ExpensesSummary with multiple expenses message', () => {
    let wrapper = shallow( <ExpensesSummary expensesLength = { 3 } sum = { 390 } /> );
    expect(wrapper).toMatchSnapshot();
});