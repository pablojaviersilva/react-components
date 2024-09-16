import React from "react";
import Tabs from "./Tabs";
import Tab from "./CustomTab";
import TabList from "./CustomTabList";
import TabPanel from "./CustomTabPanel";
// import Icon from "../Icon";

// Configuración de la metadata
const meta = {
    title: "components/Tabs2",
    component: Tabs,
    argTypes: {
        className: { control: { type: "text" } },
        onClick: { action: "clicked" },
    },
};

export default meta;

// Definición de las historias
const Template = (args) => (
    <Tabs {...args}>
        <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
        </TabList>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
    </Tabs>
);

export const Default = Template.bind({});
Default.args = {
    className: "",
};

// export const WithIcons = (args) => (
//     <Tabs {...args}>
//         <TabList>
//             <Tab>
//                 <Icon name="table2" />
//             </Tab>
//             <Tab>
//                 <Icon name="order" />
//             </Tab>
//             <Tab>
//                 <Icon name="ruler" />
//             </Tab>
//             <Tab>
//                 <Icon name="filter" />
//             </Tab>
//         </TabList>
//         <TabPanel>Panel 1</TabPanel>
//         <TabPanel>Panel 2</TabPanel>
//         <TabPanel>Panel 3</TabPanel>
//         <TabPanel>Panel 4</TabPanel>
//     </Tabs>
// );
// WithIcons.args = {
//     className: "",
// };
