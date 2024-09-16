import React from "react";
import PropTypes from "prop-types";
import { TabPanel } from "react-tabs";

import "./react-tabs.scss";

function CustomTabPanel({ children, ...otherProps }) {
    return (
        <TabPanel
            data-ui="TabPanel"
            {...Object.keys(otherProps).reduce((acc, key) => {
                // Filter out props that should not be passed to TabPanel
                if (key !== "selectedIndex" && key !== "setSelectedIndex") {
                    acc[key] = otherProps[key];
                }
                return acc;
            }, {})}
        >
            {children}
        </TabPanel>
    );
}

export default CustomTabPanel;

CustomTabPanel.tabsRole = "TabPanel"; // Required field to use your custom TabPanel
CustomTabPanel.propTypes = {
    /**
     * Content to be rendered
     */
    children: PropTypes.node.isRequired,
};