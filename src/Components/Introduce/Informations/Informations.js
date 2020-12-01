import React, { Component } from 'react';
import Information from './Information/Information';


class Informations extends Component {
    render () {
        return this.props.persons.map((person, index) => {
            return <Information key={person.id} name={person.name} age={person.age} 
                    changed={event => this.props.changed(event, person.id)}/>
        });
    }
}

export default Informations;
