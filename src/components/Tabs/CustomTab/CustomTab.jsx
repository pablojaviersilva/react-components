import React from "react";
import { Tab } from "react-tabs";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./CustomTab.module.scss";

function CustomTab({ "aria-selected": ariaSelected, isPrevious, onClick, children, className, ...otherProps }) {
    const cx = classNames.bind(styles);
    return (
        <Tab
            aria-selected={ariaSelected}
            onClick={onClick}
            className={`${styles.CustomTab} ${cx(className)} ${isPrevious ? styles.previous : ""}`}
            data-ui="Tab"
            role="tab"
            {...otherProps}
        >
            {children}
        </Tab>
    );
}

export default CustomTab;

CustomTab.tabsRole = "Tab"; // Required field to use your custom Tab
CustomTab.propTypes = {
    /**
     * Content to be rendered
     */
    children: PropTypes.node.isRequired,
    "aria-selected": PropTypes.bool,
    isPrevious: PropTypes.bool,
    onClick: PropTypes.func,
    /**
     * Override or extend the styles applied to the component
     */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.object)]),
};

CustomTab.defaultProps = {
    "aria-selected": false,
    className: "",
    isPrevious: false,
    onClick: () => {},
};
