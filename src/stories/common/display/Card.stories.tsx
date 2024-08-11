import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../components/Card";

const meta: Meta<typeof Card> = {
    title: "Common/Display/Card",
    component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: (args) => <Card {...args}>This is a card</Card>,
};

export const WithLabel: Story = {
    render: (args) => (
        <Card {...args} >
            <Card>Label</Card>
            This is a card
        </Card>
    ),
};