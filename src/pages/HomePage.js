import React, { Component } from 'react';
import { HomeWrapper, HomeContent } from '../styled-components/home';
import { BigColor, Header, Footer, ProductCard, ReviewCard } from '../components';
import InstagramIcon from '@material-ui/icons/Instagram';

class Home extends Component {
    showProducts = () => {
      return [...Array(10)].map((a,i) => {
        var obj = {
          title: "TARAK 20L",
          type: "BACKPACK",
          img: "/images/1427b249650d87883435f37feb0a2030dea5c900.png",
          description: "Cross-country skiing, world-class climbing, or more strenuous hikes.",
          price: "100.00",
          tag: "Choice"
        }
        return <ProductCard key={i} product={obj}/>
      })
    }
    showReviews = () => {
      return [...Array(3)].map((a,i) => {
        var obj = {
          stars: 5,
          review: "Soooo good! My dream backpack! Fits everything I need. Suitable for uni and as a travel pack. Definitely using it for life!",
          name: "Anne"
        }
        return <ReviewCard key={i} review={obj}/>
      })
    }
    render(){
      return (
          <HomeWrapper>
              <Header/>
              <HomeContent>
                <BigColor id="mainBanner">
                  <h1>THE<br/><span>DEL DÍA FAMILY</span></h1>
                  <h3>One-of-a-kind.<br/>100% Repurposed Fabric.<br/>Uniquely Yours.</h3>
                </BigColor>
                <BigColor styleObj={{
                  backgroundColor: '#1899d8'
                }}>
                  <img style={{width: '100px', margin: 'auto'}} src="/images/sun.png"/>
                  <h3>All Del Día products are made in the Philippines using fabric left over from other companies’ large production runs.This keeps perfectly good materials out of the landfill,
                  putting them into the hands of thoughtful adventurers like you.</h3>
                </BigColor>
                <BigColor className="splitWrapRight" styleObj={{
                  backgroundColor: '#f09238'
                }}>
                  <div className="splitDiv">
                    <img style={{
                      width: '80%',
                      margin: 'auto'
                    }} src="/images/36ee6230fffd7e31b7938fba2f4158bfd204a130.png"/>
                  </div>
                  <div className="splitDiv">
                    <h2>THE ORIGIN STORY<br/><span>How It All Started</span></h2>
                    <p>Our design team wanted to create products to help empower factory workers as makers. Then we had a bright idea, literally. Not only would using remnant fabric be better for Mother Earth, it would also give factory workers more creative control. They could create one-of-a-kind colorways from the vibrant, leftover fabric—each color combo the unique signature of an indispensable maker.</p>
                  </div>
                </BigColor>
                <BigColor className="splitWrapLeft" styleObj={{
                  backgroundColor: '#ed6976',
                  paddingTop: 0
                }}>
                  <div className="splitDiv">
                    <img style={{
                      marginBottom: '36px',
                      width: '100%'
                    }} src="/images/097483c85744915930dad650598df248e0594475.png"/>
                  </div>
                  <div className="splitDiv">
                    <h2>CREATIVE CONTROL FROM MAKERS<br/><span>One - of - a - Kind</span></h2>
                    <p>Every Del Día pack is the product of many hands. But whether the pack features aquamarine blue, deep purple, or ruby red—that’s up to the sewer. They put together the funky color combos that make each pack distinct, giving them final creative control over every backpack, satchel, and fanny pack in the Del Día family.</p>
                  </div>
                </BigColor>
                <iframe
                  src="https://www.youtube.com/embed/1rUJ4R1FM38"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <BigColor className="splitWrapRight" styleObj={{
                  backgroundColor: '#acd8c0'
                }}>
                <div className="splitDiv">
                  <img id="hiddenImage" src="/images/689d82763491edf9a2e657b65e6099b2fe36b3ca.png"/>
                </div>
                <div className="splitDiv">
                  <h2>MAKING LEFTOVERS SHINE<br/><span>Made With (Re)Purpose</span></h2>
                  <p>All products in our (Re)Purpose™ Collection use repurposed fabric—fabric left over from other companies’ production runs that was originally created for another purpose. We know that leftovers don’t have to be lesser, and our Del Día packs are proof.</p>
                </div>
                </BigColor>
                <BigColor styleObj={{
                  backgroundColor: '#3cd8e7'
                }}>
                <img/>
                <h2>DEL DIA CHOICE<br/><span>Choose Your Adventure</span></h2>
                <p>When we released our first Del Día products, we sent you a one-of-a-kind colorway at random. Now, you can avoid all mystery by picking the pack that speaks to you before it gets to your doorstep. Not all products are available in Del Día Choice yet, but most are. So pick the vibrant pack that speaks to you, or leave your bag’s colors up to chance—the choice is yours.</p>
                <div className="flexDiv">
                  { this.showProducts() }
                </div>
                </BigColor>
                <BigColor styleObj={{
                  backgroundColor: '#fc495f'
                }}>
                  <h2 style={{color: "#fff"}}>WHAT YOU'RE SAYING</h2>
                  <div className="flexDiv">
                    { this.showReviews() }
                  </div>
                </BigColor>
                <BigColor styleObj={{ backgroundColor: '#fff' }}>
                  <a href="https://www.instagram.com/cotopaxi/" target="_blank">
                    <h3 style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: "0"
                    }}><InstagramIcon/>COTOPAXI</h3>
                  </a>
                  <a href="https://www.instagram.com/explore/tags/adventureon/">
                    <h2 style={{margin: "8px"}}>#ADVENTUREON</h2>
                  </a>
                  <div id="instaBlock"/>
                </BigColor>
              </HomeContent>
              <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
