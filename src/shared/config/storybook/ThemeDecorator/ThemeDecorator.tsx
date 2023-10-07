import { StoryFn } from "@storybook/react";
import { ThemeProvider, Themes } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Themes) => {
    // eslint-disable-next-line
    return (Story: StoryFn) => (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
