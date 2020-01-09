import React, { Component } from 'react';
import { Header, LeftHeader, MidHeader, RightHeader, SliderMenu } from '../styled-components/header';
import Logo from './Logo';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

import MenuIcon from '@material-ui/icons/Menu';

class HeaderComponent extends Component {
  render(){
    return (
      <Header>
        <LeftHeader>
          <MenuIcon/>
        </LeftHeader>
        <MidHeader>
          <Logo/>
        </MidHeader>
        <RightHeader>
          <LocalMallOutlinedIcon/>
        </RightHeader>
        <SliderMenu></SliderMenu>
      </Header>
    );
  }
}

export default HeaderComponent;
