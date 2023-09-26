import { Meta, StoryFn } from "@storybook/react";
import { Themes } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default {
    title: "shared/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<typeof ThemeSwitcher>;

const Template: StoryFn<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
