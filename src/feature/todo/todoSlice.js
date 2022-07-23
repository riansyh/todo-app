import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemKey: 0,
    value: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            if (action.payload) {
                state.value.push({
                    key: state.itemKey,
                    taskName: action.payload,
                    isFinished: false,
                });
                state.itemKey += 1;
            }
        },
        done: (state, action) => {
            state.value[action.payload].isFinished = !state.value[action.payload].isFinished;
        },
        remove: (state, action) => {
            state.value = state.value.filter((task) => task.key !== action.payload);
        },
    },
});

export default todoSlice.reducer;
export const { add, done, remove } = todoSlice.actions;
