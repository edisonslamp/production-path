import { Meta, StoryFn } from "@storybook/react";
import { Themes } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config";
import { NotFoundPage } from "./NotFoundPage";

export default {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<typeof NotFoundPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof NotFoundPage> = () => <NotFoundPage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.DARK)];
