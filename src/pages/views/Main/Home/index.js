import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Home = ({products}) => {
    return (
        <div>
            <div className="products">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        <div className="section_title text-center">Popular on Little Closet</div>
      </div>
    </div>
    <div className="row page_nav_row">
      <div className="col">
        <div className="page_nav">
          <ul className="d-flex flex-row align-items-start justify-content-center">
            <li className="active"><a href="category.html">Women</a></li>
            <li><a href="category.html">Men</a></li>{/*  */}
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="category.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row products_row">
      {/* Product */}
      {products.map(({ id, name, image, price }, index) => (
      <div className="col-xl-4 col-md-6">
        <div className="product"> 
          <div className="product_image"><img src={image} alt /></div>
          <div className="product_content">
            <div className="product_info d-flex flex-row align-items-start justify-content-start">
              <div>
                <div>
                <div className="product_name"><a href="product.html"><Link to={`/detail/${id}`}>{name}</Link></a></div>
                </div>
              </div>
              <div className="ml-auto text-right">
                <div className="rating_r rating_r_4 home_item_rating"><i /><i /><i /><i /><i /></div>
      <div className="product_price text-right">{price}</div>
              </div>
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
      ))}
      {/* Product */}

      {/* Product */}
      {/* Product */}
      {/* Product */}
      {/* Product */}
    </div>
    <div className="row load_more_row">
      <div className="col">
        <div className="button load_more ml-auto mr-auto"><a href="#">load more</a></div>
      </div>
    </div>
  </div>
</div>
<div className="features">
  <div className="container">
    <div className="row">
      {/* Feature */}
      <div className="col-lg-4 feature_col">
        <div className="feature d-flex flex-row align-items-start justify-content-start">
          <div className="feature_left">
            <div className="feature_icon"><img src="images/icon_1.svg" alt /></div>
          </div>
          <div className="feature_right d-flex flex-column align-items-start justify-content-center">
            <div className="feature_title">Fast Secure Payments</div>
          </div>
        </div>
      </div>
      {/* Feature */}
      <div className="col-lg-4 feature_col">
        <div className="feature d-flex flex-row align-items-start justify-content-start">
          <div className="feature_left">
            <div className="feature_icon ml-auto mr-auto"><img src="images/icon_2.svg" alt /></div>
          </div>
          <div className="feature_right d-flex flex-column align-items-start justify-content-center">
            <div className="feature_title">Premium Products</div>
          </div>
        </div>
      </div>
      {/* Feature */}
      <div className="col-lg-4 feature_col">
        <div className="feature d-flex flex-row align-items-start justify-content-start">
          <div className="feature_left">
            <div className="feature_icon"><img src="images/icon_3.svg" alt /></div>
          </div>
          <div className="feature_right d-flex flex-column align-items-start justify-content-center">
            <div className="feature_title">Free Delivery</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

Home.propTypes = {

}

export default Home
