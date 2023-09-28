import { Meta, StoryFn } from "@storybook/react";
import { Themes } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config";
import { Button, SizeButton, ThemeButton } from "./Button";

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

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL,
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

// toggle sidebar button
export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: "Text",
    theme: ThemeButton.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: "Text",
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.L,
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.XL,
};
