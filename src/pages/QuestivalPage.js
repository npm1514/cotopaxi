import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { QuestivalWrapper, QuestivalContent } from '../styled-components/questival';

class Questival extends Component {
    render(){
      return (
          <QuestivalWrapper>
              <Header/>
              <QuestivalContent>
                questival page
              </QuestivalContent>
              <Footer/>
          </QuestivalWrapper>
      );
    }
}

export default Questival;
