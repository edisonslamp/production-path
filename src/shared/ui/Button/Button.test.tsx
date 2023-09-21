import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("classNames", () => {
    test("test button", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
});
