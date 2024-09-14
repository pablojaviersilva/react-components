// CustomTabList.styles.ts
import styled from "styled-components";
import { TabList } from "react-tabs";

export const TabWrapper = styled(TabList)`
    position: relative;

    /* Puedes definir variables CSS globalmente o aquí si lo prefieres */
    --Tabs-line-color: rgb(235, 236, 240);

    .CustomTabList {
        display: flex;
        font-weight: 500;
        list-style-type: none;
        margin: 0;
        padding: 0;

        > * {
            text-align: center;
            flex: auto;
        }
    }

    .tabline {
        background-color: var(--Tabs-line-color);
        border-radius: 2px;
        bottom: 0;
        content: "";
        height: 2px;
        left: 0;
        margin: 0;
        position: absolute;
        right: 8px;
        width: inherit;
    }
`;

export const StyledTabList = styled(TabList)`
    /* Puedes añadir estilos adicionales aquí si es necesario */
`;
