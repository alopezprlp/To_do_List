import * as type from "./constants";
export const reducer = (state, action) => {
  switch (action.type) {
    case type.ADD_TASK:
      return {
        taskList: [
          ...state.taskList,
          {
            id: action.payload.id,
            name: action.payload.name,
            status: "PENDING",
          },
        ],
      };
    case type.FILL_STORED_LIST:
      return { taskList: [...action.payload] };
    case type.REMOVE_TASK:
      const temp = [...state.taskList.filter((e) => e.id !== action.payload)];
      return { taskList: [...temp] };
    default:
      return state;
  }
};
