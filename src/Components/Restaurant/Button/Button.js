import React from 'react';

const summit = props => (
    <button onClick={props.summited}>{props.children}</button>
);

export default summit;
