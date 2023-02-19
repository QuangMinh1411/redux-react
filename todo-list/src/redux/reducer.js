const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    {
      id: "04b78dac-104e-4d65-a329-f6d3a985bd4e",
      name: "Learn Yoga",
      completed: false,
      priority: "Medium",
    },
    {
      id: "51018bff-26f5-4215-97f0-2ba76a4bb7fc",
      name: "Learn Redux",
      completed: true,
      priority: "High",
    },
    {
      id: "2c715e12-5f7e-46e7-95af-d16f701e0c63",
      name: "Learn Javascript",
      completed: false,
      priority: "Low",
    },
  ],
};
const rootReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};
export default rootReducer;
