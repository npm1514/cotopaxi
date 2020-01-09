import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ImpactWrapper, ImpactContent } from '../styled-components/impact';

class Impact extends Component {
    render(){
      return (
          <ImpactWrapper>
              <Header/>
              <ImpactContent>
                impact page
              </ImpactContent>
              <Footer/>
          </ImpactWrapper>
      );
    }
}

export default Impact;
