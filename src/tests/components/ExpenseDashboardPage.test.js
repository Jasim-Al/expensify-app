import React from 'react';
import { shallow } from 'enzyme';
import ExpensesDashboardPage from '../../components/ExpenceDashboardPage';

test('should show ExpensesDashboardPage correctley', () => {
    let wrapper = shallow(<ExpensesDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
});
