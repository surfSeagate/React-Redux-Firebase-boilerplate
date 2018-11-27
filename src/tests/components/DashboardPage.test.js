import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';
//import expenses from '../fixtures/expenses';

test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});