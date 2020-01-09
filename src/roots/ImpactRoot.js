import React, { Component } from 'react';
import Impact from '../pages/ImpactPage';

class Root extends Component {
    render() {
        return <Impact data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;