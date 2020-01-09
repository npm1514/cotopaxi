import React, { Component } from 'react';
import International from '../pages/InternationalPage';

class Root extends Component {
    render() {
        return <International data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;