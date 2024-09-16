import { TabPanel } from "react-tabs";
import styled from "styled-components";

export const TabPanelWrapper = styled(TabPanel)`
    &.react-tabs__tab-panel {
        display: none;

        &--selected {
            display: block;
        }
    }
`;
