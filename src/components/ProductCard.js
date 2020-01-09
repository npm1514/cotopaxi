import React, { Component } from 'react';
import { ProductCardWrap, TagCircle } from '../styled-components/productcard';

class ProductCard extends Component {
  render(){
    const { styleObj, product: { title, type, img, description, price, tag }} = this.props;
    return (
      <ProductCardWrap style={styleObj}>
        <TagCircle>
          {tag}
        </TagCircle>
        <h3 className="product_h3">{type}</h3>
        <img src={img}/>
        <h3 className="product_h3" style={{textAlign: "left"}}>WHAT IT'S GREAT FOR:</h3>
        <p>{description}</p>
        <button>CHOOSE YOURS ${price}</button>
      </ProductCardWrap>
    );
  }
}

export default ProductCard;
