import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import style from './App.css';
import Title from '../Title.js';
import TodoList from '../TodoList.js';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data: [
          {
            id: 1,
            text: 'Clear room'
          },
          {
            id: 2,
            text: 'Wash the dishes'
          },
          {
            id: 3,
            text: 'Walk my dog'
          },
          {
            id: 4,
            text: 'Do the shopping'
          },
          {
            id: 5,
            text: 'Prepare the supper'
          }
        ]
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

    removeItem = (id) => {
      this.setState({
        data: this.state.data.filter(item => item.id !== id)
      });
    }

    render() {
      return (
        <div className={style.TodoApp}>
            <Title title="ToDo list App" number={this.state.data.length}></Title>
            <TodoList list={this.state.data} removeItem={this.removeItem}></TodoList>
        </div>
      );
    }
}

export default App;
