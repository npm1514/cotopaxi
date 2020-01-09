import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { StoryWrapper, StoryContent } from '../styled-components/story';

class Story extends Component {
    render(){
      return (
          <StoryWrapper>
              <Header/>
              <StoryContent>
                story page
              </StoryContent>
              <Footer/>
          </StoryWrapper>
      );
    }
}

export default Story;
