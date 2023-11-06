import { Preview } from "@storybook/react";
import { Themes } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import {
    RouterDecorator,
    ThemeDecorator,
    TranslationDecorator,
} from "shared/config";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        ThemeDecorator(Themes.LIGHT),
        RouterDecorator(),
        TranslationDecorator(),
    ],
};

export default preview;
