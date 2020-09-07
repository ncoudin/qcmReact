import React, { Component } from 'react';

import Email from './../Forms/Email';
import Password from './../Forms/Password';

// CSS

const controls = {
    email: {
        name: "email",
        placeholder: "Email...",
        value: '',
        valid: false,
        required: true,
    },
    password: {
        name: "password",
        placeholder: "Your Password...",
        value: '',
        valid: false,
        required: true,
    }
};

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...controls
        }
    }

    // permet de récupérer la data de l'enfant
    handleInputChange = (data) => {
        const name = data.name;
        console.log(data);
        this.setState({
            [name]: data
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const email = this.state.email.value;
        const password = this.state.password.value;

        console.log(email, 'email', password, 'password');

        // TODO vérification du couple login/password
    }

    render() {
        const isValid = this.state.email.valid && this.state.password.valid;

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Identifiez-vous</h1>
                    <div className="form-group">
                        <label htmlFor="email" >Email address</label>
                        <Email {...this.state.email} handleInputChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" >Password</label>
                        <Password {...this.state.password} handleInputChange={this.handleInputChange} />
                    </div>

                    <button disabled={!isValid} type="submit" className="btn btn-primary">Se connecter</button>
                </form>
            </div>
        );
    }
}

export default Auth;