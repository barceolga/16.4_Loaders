import React from 'react';
import style from './Title.scss';

const Title = props => {
      return (
        <div className={style.Title}>
            <h1>{props.title}</h1>
            <p>Number of task to do:<span> {props.number}</span></p>
        </div>
      );
}

export default Title;
