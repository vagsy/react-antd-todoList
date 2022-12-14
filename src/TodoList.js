// 容器组件
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  // initListAction,
  // getTodoList // redux-thunk
  getInitListAction
} from './store/actionCreators';
import TodoListUI from './TodoListUI';
// import axios from 'axios';
class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(store.getState());

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  
  render() {
    return (
      // <div style={{margin: '10px'}}>
      //   <div>
      //     <Input
      //       placeholder="todo info"
      //       style={{width: '300px', margin: '0 10px 10px 0'}}
      //       value={this.state.inputValue}
      //       onChange={this.handleInputChange}
      //       />
      //     <Button
      //       type="primary"
      //       onClick={this.handleBtnClick}
      //     >提交</Button>
      //   </div>
      //   <List
      //     style={{width: '500px'}}
      //     size="small"
      //     bordered
      //     dataSource={this.state.list}
      //     renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
      //   />
      // </div>
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount() { 
    // axios.get('/api/todolist').then((res) => {
    //   const { data } = res; 
    //   store.dispatch(initListAction(data));
    // })

    // redux-thunk
    // store.dispatch(getTodoList());

    // redux-saga
    const action = getInitListAction();
    store.dispatch(action);
  }


  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // };
    // store.dispatch(action);

    store.dispatch(getInputChangeAction(e.target.value));
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM
    // };
    // store.dispatch(action);

    store.dispatch(getAddItemAction());
  }

  handleItemDelete(index) {
    // store.dispatch({
    //   type: DELETE_TODO_ITEM,
    //   index
    // });

    store.dispatch(getDeleteItemAction(index));
  }
}




export default TodoList;
