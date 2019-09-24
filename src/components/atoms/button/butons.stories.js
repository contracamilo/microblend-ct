import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Button', module)
  .add('Default Button', () => (
    <Button>Default button</Button>
  ));

storiesOf('Button', module)
  .add('Disable Button', () => (
    <Button disabled>Button disable</Button>
  ));

storiesOf('Button', module)
  .add('Secondary Button', () => (
    <Button type="secondary">Button Secondary</Button>
  ));
