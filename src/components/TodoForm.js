import React from 'react';
import style from './TodoForm.scss';
import uuid from 'uuid';

class TodoForm extends React.Component{
  constructor(props) {
    super();
    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event){
      const target = event.target;
      const value = target.value;
      const name = target.value;

      console.log(event);
      console.log(event.target.name);

        this.setState({
          [name]: value
        });

      console.log(event.target.value);
    }

    handleSubmit(event) {
        this.props.addTodo({
            text: this.state.text,
            id: uuid.v4()
          });
        event.preventDefault();
    }

    render() {
      return (
        <form className={style.TodoForm} onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='task'
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Task"
            />
            <button
              type="submit"
              >Add new task</button>
            </div>
          </form>
      );
    }
  }

export default TodoForm;
