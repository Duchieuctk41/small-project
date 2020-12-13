import React from 'react';

const input = (props) => (
    <input placeholder={props.placeholder}  value={props.statuss} onChange={props.changed}></input>
)

export default input;
