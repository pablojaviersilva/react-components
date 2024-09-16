import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Para aserciones adicionales como 'toBeInTheDocument'
import Tabs from "./Tabs";
import CustomTabList from "./CustomTabList";
import CustomTab from "./CustomTab";
import CustomTabPanel from "./CustomTabPanel";

describe("CustomTabs component", () => {
    test("renders without crashing and matches snapshot", () => {
        const { container } = render(
            <Tabs>
                <CustomTabList>
                    <CustomTab>Tab 1</CustomTab>
                    <CustomTab>Tab 2</CustomTab>
                </CustomTabList>
                <CustomTabPanel>Panel 1</CustomTabPanel>
                <CustomTabPanel>Panel 2</CustomTabPanel>
            </Tabs>,
        );
        expect(container).toMatchSnapshot();
    });

    test("displays correct tab content based on selectedIndex", () => {
        render(
            <Tabs>
                <CustomTabList>
                    <CustomTab>Tab 1</CustomTab>
                    <CustomTab>Tab 2</CustomTab>
                </CustomTabList>
                <CustomTabPanel>Panel 1</CustomTabPanel>
                <CustomTabPanel>Panel 2</CustomTabPanel>
            </Tabs>,
        );

        // Verifica que el panel correspondiente al índice seleccionado esté en el DOM
        expect(screen.getByText("Panel 1")).toBeInTheDocument();
        expect(screen.queryByText("Panel 2")).not.toBeInTheDocument();

        // Simula un clic en la segunda pestaña
        fireEvent.click(screen.getByText("Tab 2"));

        // Verifica que el segundo panel ahora esté visible
        expect(screen.getByText("Panel 2")).toBeInTheDocument();
        expect(screen.queryByText("Panel 1")).not.toBeInTheDocument();
    });

    test("calls handleSelect and updates selectedIndex when a tab is clicked", () => {
        const { getByText } = render(
            <Tabs>
                <CustomTabList>
                    <CustomTab>Tab 1</CustomTab>
                    <CustomTab>Tab 2</CustomTab>
                </CustomTabList>
                <CustomTabPanel>Panel 1</CustomTabPanel>
                <CustomTabPanel>Panel 2</CustomTabPanel>
            </Tabs>,
        );

        // Verificar que el índice de la pestaña seleccionada inicialmente es 0
        const tab1 = getByText("Tab 1");
        expect(tab1).toHaveAttribute("aria-selected", "true");

        // Clic en la segunda pestaña
        fireEvent.click(getByText("Tab 2"));

        // Verificar que el índice de la pestaña seleccionada ha cambiado
        const tab2 = getByText("Tab 2");
        expect(tab2).toHaveAttribute("aria-selected", "true");
        expect(tab1).toHaveAttribute("aria-selected", "false");
    });
});
