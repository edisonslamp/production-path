import { Meta, StoryFn } from "@storybook/react";
import { Themes } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config";
import { Button, ThemeButton } from "./Button";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
    children: "Text",
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
};

// dark theme decorator
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: "Text",
};
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: "Text",
    theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Themes.DARK)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Themes.DARK)];
