import { Meta, StoryFn } from "@storybook/react";
import { Themes } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config";
import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        "Hello! I'm your first modal window! You would be happy seenig me here!",
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        "Hello! I'm your first modal window! You would be happy seenig me here!",
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
