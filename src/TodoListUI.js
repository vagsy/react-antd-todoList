// UI组件
// import React, { Component } from 'react'
import React from 'react'
import { Input, Button, List } from 'antd';


// 无状态组件，当一个普通组件只有一个 render 函数时，可以通过一个无状态组件替换这个普通的组件
// 无状态组件，性能高，就是一个函数
// 使用场景：定义一个 UI 组件，页面渲染，没有逻辑操作
const TodoListUI = (props) => {
  return (
    <div style={{margin: '10px'}}>
      <div>
        <Input
          placeholder="todo info"
          style={{width: '300px', margin: '0 10px 10px 0'}}
          value={props.inputValue}
          onChange={props.handleInputChange}
          />
        <Button
          type="primary"
          onClick={props.handleBtnClick}
        >提交</Button>
      </div>
      <List
        style={{width: '500px'}}
        size="small"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => <List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>}
      />
    </div>
  )
}


// JS 类，需要执行声明周期函数 和 render
// class TodoListUI extends Component {
//   render () {
//     return (
//       <div style={{margin: '10px'}}>
//         <div>
//           <Input
//             placeholder="todo info"
//             style={{width: '300px', margin: '0 10px 10px 0'}}
//             value={this.props.inputValue}
//             onChange={this.props.handleInputChange}
//             />
//           <Button
//             type="primary"
//             onClick={this.props.handleBtnClick}
//           >提交</Button>
//         </div>
//         <List
//           style={{width: '500px'}}
//           size="small"
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI;
