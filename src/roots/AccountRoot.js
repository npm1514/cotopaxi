import React, { Component } from 'react';
import Account from '../pages/AccountPage';

class Root extends Component {
    render() {
        return <Account data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;