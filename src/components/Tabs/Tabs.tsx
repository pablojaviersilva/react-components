// CustomTabs.tsx
import React, { useState, ReactNode, CSSProperties } from "react";
import { Tabs as ReactTabs } from "react-tabs";
import styled from "styled-components";

// Definir los estilos con styled-components
const StyledTabs = styled(ReactTabs)`
    display: flex;
    flex-direction: column;
    /* Puedes agregar los estilos que necesites aquí */
`;

// Definir las props con TypeScript
interface CustomTabsProps {
    children: ReactNode;
    className?: string | (string | object)[];
    style?: CSSProperties;
}

// Verificar que los hijos sean un tipo específico, si necesitan recibir `selectedIndex` o `setSelectedIndex`
const isTabChild = (
    child: ReactNode,
): child is React.ReactElement<{ selectedIndex: number; setSelectedIndex: (index: number) => void }> => {
    return React.isValidElement(child) && typeof child.props === "object";
};

const Tabs: React.FC<CustomTabsProps> = ({ children, style, className }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
    };

    // Asegurarse de que `className` sea una cadena válida
    const generateClassName = (classNameInput?: string | (string | object)[]) => {
        if (Array.isArray(classNameInput)) {
            return classNameInput.map((item) => (typeof item === "string" ? item : "")).join(" ");
        }
        return typeof classNameInput === "string" ? classNameInput : "";
    };

    return (
        <StyledTabs
            className={generateClassName(className)}
            data-ui="Tabs"
            style={style}
            onSelect={handleSelect}
            selectedIndex={selectedIndex}
        >
            {React.Children.map(children, (child) =>
                // Verifica si el hijo es un elemento que puede recibir `selectedIndex` y `setSelectedIndex`
                isTabChild(child) ? React.cloneElement(child, { selectedIndex, setSelectedIndex }) : child,
            )}
        </StyledTabs>
    );
};

export default Tabs;
