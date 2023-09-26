import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = () => {
    // eslint-disable-next-line
    return (Story: StoryFn) => (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
};
