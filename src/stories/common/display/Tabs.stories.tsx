import { Meta, StoryObj } from "@storybook/react";
import Tabs from "../../../components/Tabs/Tabs";
import Tab from "../../../components/Tabs/CustomTab/CustomTab";
import TabList from "../../../components/Tabs/CustomTabList/CustomTabList";
import TabPanel from "../../../components/Tabs/CustomTabPanel/CustomTabPanel";
import { useState } from "react";

// Definir la metadata para el componente Tabs
const meta: Meta<typeof Tabs> = {
    title: "components/Tabs",
    component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

// Story para el estado por defecto
export const Default: Story = {
    render: (args) => {
        const [selectedIndex, setSelectedIndex] = useState(0);

        return (
            <Tabs {...args}>
                <TabList selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                </TabList>
                <TabPanel>Panel 1</TabPanel>
                <TabPanel>Panel 2</TabPanel>
            </Tabs>
        );
    },
};
