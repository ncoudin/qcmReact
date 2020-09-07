import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

class Title extends Component {

  constructor(props) {
    super(props);

    this.state = { nameStyle : 'title__default' };
  }

  changeColor = (e, nameStyle) => {

    this.setState({
      nameStyle: `title__${nameStyle}`
    });
  }

  selected(e, id){
    this.props.onSelected(id);
  }

  render() {

    const classes = ["list-group-item d-flex justify-content-between align-items-center", this.state.nameStyle];
    
    return (
      <li
        className={classes.join(' ')}
        onClick={(e) => this.selected(e, this.props.id)}
        onMouseOver={(e) => this.changeColor(e, 'over')} 
        onMouseOut={(e) => this.changeColor(e, 'out')}
      >
        {this.props.title}
        <span className="badge badge-primary badge-pill">{this.props.badge}</span>
      </li>
    );
  }
}

Title.propTypes = {
  id : function(props, propName, componentName) {
    if (!/[1-9][0-9]*/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed, not a number...'
      );
    }
  },
  title: PropTypes.string.isRequired,
  badge: PropTypes.oneOf([ 'easy', 'hard', 'medium' ])
}

export default Title;