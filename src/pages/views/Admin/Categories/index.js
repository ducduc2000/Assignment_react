import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

const Categories = ({ categories, onDelete,products }) => {
    const deleteHandle = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                onDelete(id)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    function getTotalProduct(id) {
        const number = products.filter((product) => product.cateId == id);
        return number.length;
    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <Link to="/admin/addcategories" className="btn btn-success">Thêm danh mục</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên danh mục</th>
                                    <th scope="col">Mô tả</th>
                                    <th scope="col">Tổng số sản phẩm</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(({id,name_cate,desc },index)=>(
                                    <tr key={index}>
                                    <td>{index+1}</td>
                                    <td><Link to={`/admin/detailcate/${id}`}>{name_cate}</Link></td>
                                    <td>{desc}</td>
                                    <td>{getTotalProduct(id)}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => deleteHandle(id)}>Xóa</button>
                                        <Link className='btn btn-primary ml-2' to={`/admin/categories/edit/${id}`}>Sửa</Link>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

Categories.propTypes = {

}

export default Categories
