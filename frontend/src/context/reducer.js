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
      return {
        taskList: [...state.taskList.filter((e) => e.id !== action.payload)],
      };
    case type.EDIT_TASK:
      console.log(action);
      return {
        taskList: [
          ...state.taskList.map((e) => {
            if (e.id === action.payload.id) {
              return {
                id: e.id,
                name: action.payload.name,
                status: e.status,
              };
            }
            return e;
          }),
        ],
      };
    case type.CHANGE_STATUS:
      return {
        taskList: [
          ...state.taskList.map((e) => {
            if (e.id === action.payload.id) {
              return {
                status: action.payload.status,
                id: e.id,
                name: e.name,
              };
            }
            return e;
          }),
        ],
      };
    default:
      return state;
  }
};
