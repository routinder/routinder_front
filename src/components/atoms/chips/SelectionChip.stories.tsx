import React from 'react';
import { Story, Meta } from '@storybook/react';

import SelectionChip, { SelectionChipPropsType } from './SelectionChip';

export default {
  title: 'Atom/Chip/SelectionChip',
  component: SelectionChip,
} as Meta;

const Template: Story<SelectionChipPropsType> = (args) => <SelectionChip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '월',
};

export const Selected = Template.bind({});
Selected.args = {
  label: '월',
  selected: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: '월',
  disabled: true,
};
