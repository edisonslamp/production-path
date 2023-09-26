import { Meta, StoryFn } from "@storybook/react";
import { Themes } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config";
import { LoaderIcon } from "./LoaderIcon";

export default {
    title: "shared/LoaderIcon",
    component: LoaderIcon,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<typeof LoaderIcon>;

const Template: StoryFn<typeof LoaderIcon> = (args) => <LoaderIcon {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
