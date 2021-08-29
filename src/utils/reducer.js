const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      if (action.value)
        state.push({
          key: state.length,
          taskName: action.value,
          isFinished: false,
        });
      console.log(state);
      return state;

    case 'CHECK':
      console.log('check');
      state[action.key].isFinished = !state[action.key].isFinished;
      return [...state];

    case 'DELETE':
      state = state.filter((task) => task.key !== action.key);
      console.log(action.key);
      return state;

    default:
      return state;
  }
};

export { initialState, reducer };
