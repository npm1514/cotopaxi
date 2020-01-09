import React, { Component } from 'react';
import Story from '../pages/StoryPage';

class Root extends Component {
    render() {
        return <Story data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;