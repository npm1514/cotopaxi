import React, { Component } from 'react';
import Questival from '../pages/QuestivalPage';

class Root extends Component {
    render() {
        return <Questival data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;