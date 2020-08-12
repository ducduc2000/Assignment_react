import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to = "/admin">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin</div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <Link className="nav-link" to = "/admin/products">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Products</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/admin/addproducts">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>AddProducts</span></Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <Link className="nav-link" to = "/admin/categories">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Categories</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/admin/addcategories">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>AddCategories</span></Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <Link className="nav-link" to = "/admin/posts">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Post</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/admin/addposts">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>AddPosts</span></Link>
            </li>
            <hr className="sidebar-divider" />
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
