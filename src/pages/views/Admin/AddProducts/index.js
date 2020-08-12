import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useHistory} from "react-router-dom"
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import firebase from '../../../../firebase'
const AddProducts = ({onAdd,categories}) => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const onHandleSubmit = (data) => {
    Swal.fire(
      'Created!',
      'Your file has been created.',
      'success'
  )
      console.log(data.image[0]);
      let file = data.image[0];
      // tạo reference chứa ảnh trên firesbase
      let storageRef = firebase.storage().ref(`images/${file.name}`);
      // đẩy ảnh lên đường dẫn trên
      storageRef.put(file).then(function () {
          storageRef.getDownloadURL().then((url) => {
              console.log(url);
              // Tạo object mới chứa toàn bộ thông tin từ input
              const newData = {
                  id: Math.random().toString(36).substr(2, 9),
                  ...data,
                  image: url
              }
              console.log(newData);
              // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
              onAdd(newData)
              history.push("/admin/products")
          })
      });
  }
    return (
       <div>
         
           <div className="row">
             <div className="col-md"></div>
             <div className="col-md-10">
             <h1 classname="h3 mb-2 text-gray-800">Thêm Sản Phẩm</h1>
      <form>
        <div className="form-group">
          <label htmlFor="inputProductName">Tên Sản Phẩm</label>
          <input name = "name" type="text" className="form-control"
           id="inputProductName" 
           ref={register({ required: true, minLength: 5 })}/>
           {errors.name && <span style={{ color: "red" }}>Tên sản phẩm không được để trống, không dưới năm ký tự</span>}
        </div>
        <div className="form-group">
                    <label htmlFor="productPrice">Ảnh sản phẩm</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file"
                                className="custom-file-input"
                                id="inputGroupFile02"
                                name="image"
                                ref={register}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Danh mục</label>
                        <select type="text" name="cateId" className="form-control" ref={register({ required: true })}>
                            <option value="0">Chưa chọn danh mục</option>
                            {categories && categories.map(({ id, name_cate}, index) => (
                                <option value={id}>{name_cate}</option>
                            ))}
                        </select>
                    </div>
        <div className="form-group">
          <label htmlFor="inputProductPrice">Giá Sản Phẩm</label>
          <input name = "price" type="text" className="form-control"
           id="inputProductPrice" 
           ref={register({ required: true, min: 0 })} />
           {errors.price && <span style={{ color: "red" }}>Gía sản phẩm không được để trống, giá sản phẩm phải lớn hơn không</span>}
        </div>
        <button onClick={handleSubmit(onHandleSubmit)} type="submit" className="btn btn-primary">Submit</button>
      </form>
             </div>
             <div className="col-md"></div>
           </div>
    </div>
  

    )
}

AddProducts.propTypes = {

}

export default AddProducts

