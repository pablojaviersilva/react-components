import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { TabList } from "react-tabs";

import styles from "./CustomTabList.module.scss";

function CustomTabList({ children, className, selectedIndex, setSelectedIndex }) {
    const cx = classNames.bind(styles);

    return (
        <div className={styles.tabwrapper}>
            <TabList className={`${styles.CustomTabList} ${cx(className)}`} data-ui="TabList">
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child, {
                        "aria-selected": selectedIndex === index,
                        "aria-posinset": index + 1,
                        "aria-setsize": React.Children.count(children),
                        onClick: () => setSelectedIndex(index),
                        isPrevious: selectedIndex === index + 1,
                    }),
                )}
            </TabList>
        </div>
    );
}

export default CustomTabList;

CustomTabList.tabsRole = "TabList"; // Required field to use your custom TabList
CustomTabList.propTypes = {
    /**
     * Content to be rendered
     */
    children: PropTypes.node.isRequired,
    selectedIndex: PropTypes.number,
    setSelectedIndex: PropTypes.func,
    /**
     * Override or extend the styles applied to the component
     */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.object)]),
};

CustomTabList.defaultProps = {
    className: "",
    selectedIndex: 0,
    setSelectedIndex: () => {},
};
