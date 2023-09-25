import { Meta, StoryFn } from "@storybook/react";
import { Themes } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config";
import { AppLink, AppLinkTheme } from "./AppLink";

export default {
    title: "shared/AppLink",
    component: AppLink,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "text",
    theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "text",
    theme: AppLinkTheme.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
    children: "text",
    theme: AppLinkTheme.RED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: "text",
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: "text",
    theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Themes.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    children: "text",
    theme: AppLinkTheme.RED,
};
RedDark.decorators = [ThemeDecorator(Themes.DARK)];
