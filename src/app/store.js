const configureStore = require("@reduxjs/toolkit").configureStore;

const todoReducer = require("../feature/todo/todoSlice").default;

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

module.exports = store;
