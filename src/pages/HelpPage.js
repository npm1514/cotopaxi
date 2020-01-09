import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HelpWrapper, HelpContent } from '../styled-components/help';

class Help extends Component {
    render(){
      return (
          <HelpWrapper>
              <Header/>
              <HelpContent>
                help page
              </HelpContent>
              <Footer/>
          </HelpWrapper>
      );
    }
}

export default Help;
