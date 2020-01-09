import React, { Component } from 'react';
import Shop from '../pages/ShopPage';

class Root extends Component {
    render() {
        return <Shop data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;