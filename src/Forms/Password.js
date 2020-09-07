import React, { Component } from 'react';

// CSS

class Password extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props
        }
    }

    handleInputChange = (event) => {

        const { value } = event.target;

        // champ requis
        const isValid = value != '';

        this.setState({ 
            value: value, 
            valid: isValid 
        });

        this.props.handleInputChange(
            { 
                value: value, 
                valid: isValid, 
                name: this.state.name, 
                required: this.state.required 
            }
        );

    }

    render() {

        return (
            <input className="form-control"
                type="password"
                name={this.state.name}
                value={this.state.value}
                placeholder={this.state.placeholder}
                onChange={this.handleInputChange}
            />
        );
    }
}

export default Password;