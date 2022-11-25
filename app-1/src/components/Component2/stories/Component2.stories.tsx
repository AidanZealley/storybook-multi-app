import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Component2, Component2Props } from '../Component2';
import { mockComponent2Props } from './Component2.mocks';

export default {
  title: 'App 1/Components/Component2',
  component: Component2,
} as ComponentMeta<typeof Component2>;

const Template: ComponentStory<typeof Component2> = (args) => <Component2 {...args} />

export const Base = Template.bind({})

Base.args = {
  ...mockComponent2Props.base,
} as Component2Props