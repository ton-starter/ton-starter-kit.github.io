import type { Meta, StoryObj } from '@storybook/vue3';

import BaseButton from '@/components/BaseButton.vue'; // несуществующий файл, пример для сторибука

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { BaseButton },
    template: '<BaseButton>Button</BaseButton>',
  }),
};
