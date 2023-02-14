import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'components';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Button',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'lg',
};
