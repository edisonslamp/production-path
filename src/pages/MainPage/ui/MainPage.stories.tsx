import { Meta, StoryFn } from "@storybook/react";
import { Themes } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config";
import MainPage from "./MainPage";

export default {
    title: "pages/MainPage",
    component: MainPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<typeof MainPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof MainPage> = () => <MainPage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.DARK)];
