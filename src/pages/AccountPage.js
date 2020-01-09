import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AccountWrapper, AccountContent } from '../styled-components/account';

class Account extends Component {
    render(){
      return (
          <AccountWrapper>
              <Header/>
              <AccountContent>
                account page
              </AccountContent>
              <Footer/>
          </AccountWrapper>
      );
    }
}

export default Account;
