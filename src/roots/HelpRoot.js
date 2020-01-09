import React, { Component } from 'react';
import Help from '../pages/HelpPage';

class Root extends Component {
    render() {
        return <Help data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;