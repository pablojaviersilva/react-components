/* eslint-disable max-len */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs } from "react-tabs";
import classNames from "classnames/bind";

import styles from "./Tabs.module.scss";

function CustomTabs({ children, className }) {
    const cx = classNames.bind(styles);
    const [selectedIndex, setSelectedIndex] = useState(0); // Estado para la pestaña seleccionada

    const handleSelect = (index) => {
        setSelectedIndex(index);
    };

    return (
        <Tabs className={`${styles.Tabs} ${cx(className)}`} data-ui="Tabs" onSelect={handleSelect} selectedIndex={selectedIndex}>
            {React.Children.map(children, (child) => React.cloneElement(child, { selectedIndex, setSelectedIndex }))}
        </Tabs>
    );
}

export default CustomTabs;

CustomTabs.propTypes = {
    /**
     * Content to be rendered
     */
    children: PropTypes.node.isRequired,
    /**
     * Override or extend the styles applied to the component
     */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.object)]),
};

CustomTabs.defaultProps = {
    className: "",
};
