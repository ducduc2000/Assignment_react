import React from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
const DetailProducts = ({products}) => {
    let{id} = useParams();
    const product = products.find(product => product.id == id);
    // console.log(products)
    return (
        <div>
           { product&& <div className="content-wrapper">
            <img src={product.image} width = "200px" />
            <h3>Tên sản phẩm</h3>
            <p>{product.name}</p>
            <h3>Giá sản phẩm</h3>
            <span>{product.price}</span>
            </div> }
        </div>
    )
}

export default DetailProducts;