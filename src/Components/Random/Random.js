import React, { Component } from 'react';
import Input from './Input/Input';
import Result from './Result/Result';

class Random extends Component {
    
    state = {
        min: 1,
        max: 100,
        result: 1
    }

    clickHandler(min, max) {
        let result = Math.floor(min + (Math.random()) * (max-min));
        console.log(result);
        this.setState({result: result});
    };

    handleClick = () => {
        console.log('this is:', this);
      }

    render () {
        return (
            <div>
                <h3>Random</h3>
                <label>Min</label>
                <Input reference={this.state.min} />
                <label>Max</label>
                <Input reference={this.state.max} />
                <button 
                    onClick={() => this.clickHandler(this.state.min, this.state.max)}>
                        Click me
                </button>
                <Result>{this.state.result}</Result>
            </div>
        );
    }
}

export default Random;
