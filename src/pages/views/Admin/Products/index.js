import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

const ProductsManager = ({ products, onRemove, categories }) => {
    const removeHandle = (id) => {
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
                onRemove(id)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    const [filter, setFilter] = useState("")
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <Link to="/admin/addproducts" className="btn btn-success">Thêm sản phẩm</Link>
                    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input value={filter} onChange={(e) => setFilter(e.target.value)} type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search" />
                        </button>
                    </div>
                </div>
            </form>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {products.map((product, index) => {
                                    if (filter.length !== 0) {
                                        if ((product.name).startsWith(filter)) {
                                            return (<tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td><Link to={`/admin/detail/${product.id}`}>{product.name}</Link></td>
                                                <td><img src={product.image} alt="" width="50" /></td>
                                                <td>{product.price}</td>
                                                <td>{categories.map((cate) => cate.id == product.cateId && <p>{cate.name_cate}</p>)}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => removeHandle(product.id)}>Xóa</button>
                                                    <Link className='btn btn-primary ml-2' to={`/admin/products/edit/${product.id}`}>Sửa</Link>
                                                </td>
                                            </tr>)
                                        } else {
                                            return null
                                        }
                                    }
                                    return (<tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td><Link to={`/admin/detail/${product.id}`}>{product.name}</Link></td>
                                        <td><img src={product.image} alt="" width="50" /></td>
                                        <td>{product.price}</td>
                                        <td>{categories.map((cate) => cate.id == product.cateId && <p>{cate.name_cate}</p>)}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(product.id)}>Xóa</button>
                                            <Link className='btn btn-primary ml-2' to={`/admin/products/edit/${product.id}`}>Sửa</Link>
                                        </td>
                                    </tr>)
                                })}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
