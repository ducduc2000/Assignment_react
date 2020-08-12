import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
const EditCategories = ({ categories, onUpdateCate }) => {
    let { id } = useParams();
    let history = useHistory();
    let category = categories.find((data) => data.id == id);
    const [currentCategory, setCurrentCategory] = useState(category);
    console.log(currentCategory);
    const onHandleSubmit = (e) => {
        Swal.fire(
            'Updated!',
            'Your file has been updated.',
            'success'
        )
        onUpdateCate(currentCategory);
        history.push("/admin/categories");
    };
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setCurrentCategory({
            ...currentCategory,
            [name]: value,
        });
    };
    const { register, handleSubmit, errors } = useForm();
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-100" >
                <div className="form-group">
                    <label htmlFor="productName">Tên danh mục</label>
                    <input type="text" name="name_cate" defaultValue={currentCategory.name_cate} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.name_cate && <span style={{ color: "red" }}>Tên danh mục không được để trống</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Mô tả danh mục</label>
                    <input type="text" name="desc" defaultValue={currentCategory.desc} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.desc && <span style={{ color: "red" }}>Mô tả danh mục không được để trống</span>}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditCategories.propTypes = {

}

export default EditCategories