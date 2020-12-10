import React from 'react';

const input = ( props ) => (
<input value={props.reference} onChange={props.changed}></input>
);

export default input;
