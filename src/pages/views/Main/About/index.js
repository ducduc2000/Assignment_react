import React from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
const About = ({products}) => {
    let{id} = useParams();
    const product = products.find(product => product.id == id);
    return (
        <div>
            <div className="container">
  <div className="row">
    {/* Product Image */}
    <div className="col-lg-6">
      <div className="product_image_slider_container">
        <div id="slider" >
          <ul className="slides">
            <li>
              <img src={product.image}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Product Info */}
    <div className="col-lg-6 product_col">
      <div className="product_info">
        <div className="product_name">{product.name}</div>
        <div className="product_rating_container d-flex flex-row align-items-center justify-content-start">
          <div className="rating_r rating_r_4 product_rating"><i /><i /><i /><i /><i /></div>
          <div className="product_reviews">4.7 out of (3514)</div>
          <div className="product_reviews_link"><a href="#">Reviews</a></div>
        </div>
        <div className="product_price">{product.price}</div>
        <div className="product_size">
          <div className="product_size_title">Select Size</div>
          <ul className="d-flex flex-row align-items-start justify-content-start">
            <li>
              <input type="radio" id="radio_1" disabled name="product_radio" className="regular_radio radio_1" />
              <label htmlFor="radio_1">XS</label>
            </li>
            <li>
              <input type="radio" id="radio_2" name="product_radio" className="regular_radio radio_2" defaultChecked />
              <label htmlFor="radio_2">S</label>
            </li>
            <li>
              <input type="radio" id="radio_3" name="product_radio" className="regular_radio radio_3" />
              <label htmlFor="radio_3">M</label>
            </li>
            <li>
              <input type="radio" id="radio_4" name="product_radio" className="regular_radio radio_4" />
              <label htmlFor="radio_4">L</label>
            </li>
            <li>
              <input type="radio" id="radio_5" name="product_radio" className="regular_radio radio_5" />
              <label htmlFor="radio_5">XL</label>
            </li>
            <li>
              <input type="radio" id="radio_6" disabled name="product_radio" className="regular_radio radio_6" />
              <label htmlFor="radio_6">XXL</label>
            </li>
          </ul>
        </div>
        <div className="product_buttons">
          <div className="text-right d-flex flex-row align-items-start justify-content-start">
            <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
              <div><div><img src="images/heart_2.svg" className="svg" alt /><div>+</div></div></div>
            </div>
            <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
              <div><div><img src="images/cart.svg" className="svg" alt /><div>+</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

About.propTypes = {

}

export default About
