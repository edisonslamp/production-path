import { Meta, StoryFn } from "@storybook/react";
import { Themes } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config";
import { Text, TextTheme } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Title lorem ipsun",
    text: "Title lorem ipsun",
};

export const Error = Template.bind({});
Error.args = {
    title: "Title lorem ipsun",
    text: "Title lorem ipsun",
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: "Title lorem ipsun",
    text: "Title lorem ipsun",
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Themes.DARK)];

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: "Title lorem ipsun",
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: "Title lorem ipsun",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: "Title lorem ipsun",
    text: "Title lorem ipsun",
};
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: "Title lorem ipsun",
};
onlyTitleDark.decorators = [ThemeDecorator(Themes.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: "Title lorem ipsun",
};
onlyTextDark.decorators = [ThemeDecorator(Themes.DARK)];
