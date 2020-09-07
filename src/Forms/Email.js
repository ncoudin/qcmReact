import React, { Component } from 'react';

// CSS

class Email extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props
        }
    }

    handleInputChange = (event) => {

        const { value } = event.target;

        // vérification de la syntaxe du mail et de fait que c'est requis
        const isValid = this.verifEmail(value) && value != '';

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

    verifEmail(email) {
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        return re.test(email);
    }

    render() {

        return (
            <input className="form-control"
                type="email"
                name={this.state.name}
                value={this.state.value}
                placeholder={this.state.placeholder}
                onChange={this.handleInputChange}
            />
        );
    }
}

export default Email;