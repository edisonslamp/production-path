import { fireEvent, screen } from "@testing-library/react";

// absolute import from shared/lib using public API doesn't work somehow
import { renderWithTranslations } from "shared/lib/tests/renderWithTranslations/renderWithTranslations";
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
