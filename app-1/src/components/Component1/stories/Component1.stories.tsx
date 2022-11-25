import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Component1, Component1Props } from '../Component1';
import { mockComponent1Props } from './Component1.mocks';

export default {
  title: 'App 1/Components/Component1',
  component: Component1,
} as ComponentMeta<typeof Component1>;

const Template: ComponentStory<typeof Component1> = (args) => <Component1 {...args} />

export const Base = Template.bind({})

Base.args = {
  ...mockComponent1Props.base,
} as Component1Props