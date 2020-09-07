import React, { Component } from 'react';

import Qcm  from './Qcm';
// CSS

class Genre extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id || null // state
        }
    }

    //  // remettre à jour les states une fois une question sélectionnée
    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id)
            this.setState({ id: this.props.id }); // delta
    }

    render() {

        return (
            <Qcm genre_id={this.state.id} />
        );
    }
}

export default Genre;