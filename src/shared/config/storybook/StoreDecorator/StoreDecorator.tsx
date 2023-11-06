import { DeepPartial } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => {
    // eslint-disable-next-line
    return (Story: StoryFn) => (
        <StoreProvider initialState={state}>
            <Story />
        </StoreProvider>
    );
};
