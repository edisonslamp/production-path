import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslations } from "shared/lib";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
    test("test render", () => {
        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("test toggle", () => {
        renderWithTranslations(<Sidebar />);
        // get the button mocked
        const toggleBtn = screen.getByTestId("sidebar-toggle");

        // click on mocked button
        fireEvent.click(toggleBtn);

        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
