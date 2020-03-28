import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('render ExpenseList with expenses', () => {
    let wrapper = shallow( <ExpenseList expenses = { expenses } /> );
    expect(wrapper).toMatchSnapshot();
});

test('render ExpenseList with with empty expenses message', () => {
    let wrapper = shallow( <ExpenseList expenses = { [] } /> );
    expect(wrapper).toMatchSnapshot();
});