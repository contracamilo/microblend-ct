import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';


const defaultProps = {
  id: 'btn',
  type: 'primary',
  action: jest.fn(),
  disabled: false
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Button {...setupProps}>Test</Button>);
};

describe('Tests for withdrawals', () => {
  test('should render without error', () => {
    const wrapper = setup();
    expect(wrapper.length).toBeGreaterThanOrEqual(1);
  });
});
