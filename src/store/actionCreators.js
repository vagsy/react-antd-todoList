import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  GET_INIT_LIST
} from './actionTypes'
// import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = (value) => ({
  type: ADD_TODO_ITEM,
  value
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

// redux-thunk
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('/api/todolist').then((res) => {
//       const { data } = res; 
//       dispatch(initListAction(data));
//     });
//   }
// }

export const getInitListAction = () =>({
  type: GET_INIT_LIST
});
