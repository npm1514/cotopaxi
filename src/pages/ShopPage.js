import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShopWrapper, ShopContent } from '../styled-components/shop';

class Shop extends Component {
    render(){
      return (
          <ShopWrapper>
              <Header/>
              <ShopContent>
                shop page
              </ShopContent>
              <Footer/>
          </ShopWrapper>
      );
    }
}

export default Shop;
