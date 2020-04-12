import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';

let startLogout, history, wrapper;
beforeEach(() => {
    startLogout = jest.fn();
    history = {location : { pathname: 'dashboard' }}
    wrapper = shallow(<Header startLogout = {startLogout} history = {history}/>);
});

test('render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});