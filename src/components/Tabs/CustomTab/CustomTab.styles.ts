import styled from "styled-components";
import { Tab } from "react-tabs";

// Variables globales de CSS (puedes definirlas en un archivo global o aquí directamente)
const StyledTab = styled(Tab)<{ isPrevious: boolean }>`
    --Tab-color: #7d7d7d;
    --Tab-font-size: 12px;
    --Tab-selected-color: var(--Kenmei-Primary-Adele);

    color: var(--Tab-color);
    cursor: pointer;
    font-size: var(--Tab-font-size);
    font-weight: 400;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    outline: none;
    padding: 6px 0;
    display: flex;
    justify-content: center;
    background-color: var(--Kenmei-Light-Light3);

    &:last-child {
        margin-right: 0px !important;
    }

    &[aria-selected="false"] {
        margin-right: 2px;
    }

    &[aria-selected="true"] {
        color: var(--Tab-selected-color);
        border-bottom: 2px solid var(--Tab-selected-color);
        background-color: var(--Kenmei-Light-Light1);
    }

    &.previous {
        margin-right: 0px !important;
    }

    /* Aplica los estilos de isPrevious */
    ${({ isPrevious }) =>
        isPrevious &&
        `
      margin-right: 0px !important;
    `}
`;

export default StyledTab;
