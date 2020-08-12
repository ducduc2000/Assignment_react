import React from 'react'
import PropTypes from 'prop-types'

const Blog = ({posts}) => {
    return (
        <div>
            {posts.map(({ id, title, image, short}, index) => (    
           <section className="fh5co-blog ">
  <div className="site-container ">
   
      
      <div className="single-blog">
        <div className="single-blog__img">
          <img width="700px" height="500px;" src={image} alt="" />
        </div>
        <div className="single-blog__text">
            <h4>{title}</h4>
          <span>On August 28, 2015</span>
            <p>{short}</p>
        </div>
      </div>
    
  </div>
</section>
 ))}
</div>
    )
}

Blog.propTypes = {

}

export default Blog
