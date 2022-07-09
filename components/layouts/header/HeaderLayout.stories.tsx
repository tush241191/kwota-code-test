import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderLayout, { IHeaderLayout } from './HeaderLayout';
import { mockHeaderLayoutProps } from './HeaderLayout.mocks';

export default {
  title: 'templates/HeaderLayout',
  component: HeaderLayout,
  argTypes: {},
} as ComponentMeta<typeof HeaderLayout>;

const Template: ComponentStory<typeof HeaderLayout> = (args) => (
  <HeaderLayout {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockHeaderLayoutProps.base,
} as IHeaderLayout;
