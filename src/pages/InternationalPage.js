import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { InternationalWrapper, InternationalContent } from '../styled-components/international';

class International extends Component {
    render(){
      return (
          <InternationalWrapper>
              <Header/>
              <InternationalContent>
                international page
              </InternationalContent>
              <Footer/>
          </InternationalWrapper>
      );
    }
}

export default International;
