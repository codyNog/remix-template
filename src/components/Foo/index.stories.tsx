import type { Meta, StoryObj } from '@storybook/react';
import { Foo as Component } from '.';

const meta: Meta<typeof Component> = {
  component: Component,
}

export default meta;

type Story = StoryObj<typeof Component>;

export const FirstStory: Story = {
  render: (args) => <Component {...args} />,
};
