import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('should show ExpensesDashboardPage correctley', () => {
    let wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();
});
