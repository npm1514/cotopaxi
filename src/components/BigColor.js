import React, { Component } from 'react';
import { BigColorWrap } from '../styled-components/bigcolor';

class BigColor extends Component {
  render(){
    const { styleObj, id, className } = this.props;
    return (
      <BigColorWrap style={styleObj} id={id} className={className}>
        {this.props.children}
      </BigColorWrap>
    );
  }
}

export default BigColor;
