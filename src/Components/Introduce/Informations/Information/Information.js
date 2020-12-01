import React from 'react';
import Aux from '../../../../hoc/Aux';

const information  = props => (
    <Aux>
        <h3> Hi, i'm {props.name}, i'm {props.age}</h3>
        <input type="text" value={props.name} onChange={props.changed}></input>
    </Aux>
);

export default information;
