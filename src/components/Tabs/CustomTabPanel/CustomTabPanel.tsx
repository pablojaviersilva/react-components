import React, { ReactNode, CSSProperties, HTMLProps } from "react";
import { TabPanelWrapper } from "./CustomTabPanel.styles";

// Define el tipo de las propiedades aceptadas por CustomTabPanel
interface CustomTabPanelProps extends Omit<HTMLProps<HTMLDivElement>, "style"> {
    children: ReactNode;
    style?: CSSProperties;
}

const CustomTabPanel: React.FC<CustomTabPanelProps> = ({ children, style, ...otherProps }) => {
    // Filtra las propiedades que no deben pasarse al componente TabPanel
    const filteredProps = Object.entries(otherProps).reduce(
        (acc, [key, value]) => {
            if (key !== "selectedIndex" && key !== "setSelectedIndex") {
                acc[key] = value;
            }
            return acc;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {} as Record<string, any>,
    );

    return (
        <TabPanelWrapper
            className={`react-tabs__tab-panel ${otherProps["aria-selected"] ? "react-tabs__tab-panel--selected" : ""}`}
            data-ui="TabPanel"
            style={style}
            {...filteredProps}
        >
            {children}
        </TabPanelWrapper>
    );
};

// Define el rol de tabs para el componente CustomTabPanel
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(CustomTabPanel as any).tabsRole = "TabPanel";

export default CustomTabPanel;
