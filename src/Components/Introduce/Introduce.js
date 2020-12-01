import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Button from './Button/Button';
import Informations from './Informations/Informations';

class Introduce extends Component {
    constructor (props) {
        super(props);
    }
    state = {
        persons : [
            {id: 'loz', name: 'Hieu', age: 18},
            {id: 'cac', name: 'Huong', age: 19},
            {id: 'chim', name: 'Hoang', age: 16}
        ]
    }

    changedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex( person => person.id == id);
        const person = {...this.state.persons[personIndex]}

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    render () {
        return (
            <Aux>
                <h2>Hi everyone, I'm React</h2>
                <Button />
                <Informations persons={this.state.persons} changed={this.changedHandler} />
            </Aux>
        );
    }
}

export default Introduce;
