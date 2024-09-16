// CustomTabList.tsx
import React, { ReactNode, FC } from "react";
import { TabWrapper, StyledTabList } from "./CustomTabList.styles"; // Ajusta la ruta según sea necesario

interface CustomTabListProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
}

const CustomTabList: FC<CustomTabListProps> = ({ children, className = "", style, selectedIndex, setSelectedIndex }) => {
    return (
        <TabWrapper>
            <StyledTabList className={className} data-ui="TabList" style={style}>
                {React.Children.map(children, (child, index) =>
                    React.isValidElement(child)
                        ? React.cloneElement(child, {
                              "aria-selected": selectedIndex === index,
                              "aria-posinset": index + 1,
                              "aria-setsize": React.Children.count(children),
                              onClick: () => setSelectedIndex(index),
                              isPrevious: selectedIndex === index + 1,
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          } as any) // Usa `as any` para evitar problemas de tipos con atributos ARIA
                        : null,
                )}
            </StyledTabList>
            {/* Si necesitas la línea debajo de las pestañas, descomenta esto */}
            {/* <div className="tabline" /> */}
        </TabWrapper>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(CustomTabList as any).tabsRole = "TabList"; // Required field to use your custom TabList

export default CustomTabList;
