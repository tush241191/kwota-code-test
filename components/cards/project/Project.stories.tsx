import { ComponentMeta, ComponentStory } from '@storybook/react';
import Project, { IProject } from './Project';
import { mockProjectProps } from './Project.mocks';

export default {
  title: 'templates/Project',
  component: Project,
  argTypes: {},
} as ComponentMeta<typeof Project>;

const Template: ComponentStory<typeof Project> = (args) => (
  <Project {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockProjectProps.base,
} as IProject;
