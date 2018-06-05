import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import style from './App.css';
import Title from '../Title.js';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data: []
      };
    }
    addTodo(val){
      const todo = {
        text: val,
        id: uuid.v4(),
      };
      const data = [...this.state.data, todo];
      this.setState({data});
    }
    removeTodo(id) {
      const raminder = this.state.data.filter(todo => todo.id !== id);
      this.setState({data: remainder});
    }
    render() {
      return (
        <div className={style.TodoApp}>
            <Title title="ToDo list App" number={this.state.data.length}></Title>
        </div>
      );
    }
}

export default App;
