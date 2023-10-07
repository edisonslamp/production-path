import { fireEvent, screen } from "@testing-library/react";

// absolute import from shared/lib using public API doesn't work somehow
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
    test("test render", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("test toggle", () => {
        componentRender(<Sidebar />);
        // get the button mocked
        const toggleBtn = screen.getByTestId("sidebar-toggle");

        // click on mocked button
        fireEvent.click(toggleBtn);

        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
