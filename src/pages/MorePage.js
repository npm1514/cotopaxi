import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MoreWrapper, MoreContent } from '../styled-components/more';

class More extends Component {
    render(){
      return (
          <MoreWrapper>
              <Header/>
              <MoreContent>
                more page
              </MoreContent>
              <Footer/>
          </MoreWrapper>
      );
    }
}

export default More;
