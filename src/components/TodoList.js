import React from 'react';
import {array} from 'prop-types';
import Todo from './Todo.js';
import style from './TodoList.scss';

const TodoList = props => {

  return(
    <ol className={style.TodoList}>
    {props.list.map(item => {
      return <Todo item={item} key={item.id} removeItem={props.removeItem}></Todo>
    })
  }
    </ol>
  )
}
TodoList.propTypes = {list: array};
export default TodoList;
