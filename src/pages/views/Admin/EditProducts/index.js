import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const EditProducts = ({ products, onUpdate }) => {
    
    let { id } = useParams();
    let history = useHistory();
    let product = products.find((data) => data.id == id);
    const [currentProduct, setCurrentProduct] = useState(product);
    console.log(currentProduct);
    const onHandleSubmit = (e) => {
        Swal.fire(
            'Updated!',
            'Your file has been updated.',
            'success'
        )
        // e.preventDefault();
        onUpdate(currentProduct);
        history.push("/admin/products");
    };
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value,
        });
    };
    const { register, handleSubmit, errors } = useForm();
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50" >
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" value={currentProduct.name} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="productName">Ảnh sản phẩm</label>
                    <input type="text" name="image" value={currentProduct.image} onChange={onHandleChange} className="form-control" ref={register({ required: true })}/>
                    {errors.image && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="text" name="price" value={currentProduct.price} onChange={onHandleChange} className="form-control" ref={register({ required: true })}/>
                    {errors.price && <span>This field is required</span>}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditProducts.propTypes = {
    products: PropTypes.array
}

export default EditProducts