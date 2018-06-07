import React from 'react';
import {shape, string} from 'prop-types';
import style from './Todo.scss';

const Todo = props => {

    return (
      <li className={style.Todo} id={props.item.id}>
      {props.item.text}
        <span>  </span><button className = {'button'} onClick = {() => props.removeItem(props.item.id)}>x</button>
      </li>
    );

}
Todo.propTypes = {item: shape({
  text: string
})};
export default Todo;
