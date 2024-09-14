import { FC, ReactNode, CSSProperties } from "react";
import StyledTab from "./CustomTab.styles"; // El archivo con los estilos

// Definir la interfaz para las props
interface CustomTabProps {
    "aria-selected"?: boolean;
    isPrevious?: boolean;
    onClick?: () => void;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

// Declarar la función del componente
const CustomTab: FC<CustomTabProps> = ({
    "aria-selected": ariaSelected = false,
    isPrevious = false,
    onClick = () => {},
    children,
    className = "",
    style,
    ...otherProps
}) => {
    return (
        <StyledTab
            aria-selected={ariaSelected}
            onClick={onClick}
            className={className}
            style={style}
            isPrevious={isPrevious}
            {...otherProps}
        >
            {children}
        </StyledTab>
    );
};

// Agregar la propiedad 'tabsRole' al componente
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(CustomTab as any).tabsRole = "Tab"; // Necesario para react-tabs

export default CustomTab;
