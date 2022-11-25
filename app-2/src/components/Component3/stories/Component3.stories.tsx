import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Component3, Component3Props } from '../Component3';
import { mockComponent3Props } from './Component2.mocks';

export default {
  title: 'App 2/Components/Component3',
  component: Component3,
} as ComponentMeta<typeof Component3>;

const Template: ComponentStory<typeof Component3> = (args) => <Component3 {...args} />

export const Base = Template.bind({})

Base.args = {
  ...mockComponent3Props.base,
} as Component3Props