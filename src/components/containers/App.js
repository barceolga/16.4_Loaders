import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import style from './App.scss';
import Title from '../Title.js';
import TodoList from '../TodoList.js';
import TodoForm from '../TodoForm.js';
import {hot} from 'react-hot-loader';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data: [
          {
            id: 1,
            text: 'Clean the house'
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
          },
          {
            id: 6,
            text: 'Feed my dog'
          }

        ]
      };
    }

    addTodo = (newTodo) => {
      const data = [...this.state.data, newTodo];
      this.setState({data});
    }

    removeItem = (id) => {
      this.setState({
        data: this.state.data.filter(item => item.id !== id)
      });
    }
   removeAll = () => {
     this.setState({
       data: []
     });
   }
    render() {
      return (
        <div className={style.TodoApp}>
            <TodoForm addTodo={this.addTodo}></TodoForm>
            <Title title="ToDo list App" number={this.state.data.length}></Title>
            <div><button onClick = {() =>this.removeAll()}>Remove list</button></div>
            <TodoList list={this.state.data} removeItem={this.removeItem}></TodoList>
        </div>
      );
    }
}

export default hot(module)(App);
