import React, { Component } from 'react';
import More from '../pages/MorePage';

class Root extends Component {
    render() {
        return <More data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;