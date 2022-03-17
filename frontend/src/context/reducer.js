import * as type from "./constants";
export const reducer = (state, action) => {
  switch (action.type) {
    case type.ADD_TASK:
      return {
        taskList: [
          ...state.taskList,
          {
            id: action.Item.id,
            task: action.Item.task,
            status: action.Item.status,
          },
        ],
      };
    case type.FILL_STORED_LIST:
      return { taskList: [...action.payload] };
    default:
      return state;
  }
};
