import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItems from '../../components/ExpensesListItems';
import expenses from '../fixtures/expenses';

test('should show expense list item', () => {
    let wrapper = shallow(<ExpenseListItems { ...expenses[1] } />);
    expect(wrapper).toMatchSnapshot();
});