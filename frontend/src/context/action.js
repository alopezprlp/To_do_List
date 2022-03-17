import * as type from "./constants";

export const fillList = (list) => {
  return {
    type: type.FILL_STORED_LIST,
    payload: list,
  };
};

export const addTask = (Item) => {
  return {
    type: type.ADD_TASK,
    payload: { id: Item.id, name: Item.name },
  };
};

export const removeTask = (id) => {
  return {
    type: type.REMOVE_TASK,
    payload: id,
  };
};

export const updateTask = ({ id,name }) => {
  return {
    type: type.EDIT_TASK,
    payload: {
      name,
      id
    },
  };
};

export const changeStatus = ({ id, status }) => {
  return {
    type: type.CHANGE_STATUS,
    payload: {
      status,
      id,
    },
  };
};
