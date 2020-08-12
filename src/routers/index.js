import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../pages/layouts/Main'
import MainAdmin from '../pages/layouts/MainAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProducts from '../pages/views/Admin/AddProducts'
import DetailProducts from '../pages/views/Admin/DetailProducts'
import EditProducts from '../pages/views/Admin/EditProducts'
import Categories from '../pages/views/Admin/Categories';
import AddCategories from '../pages/views/Admin/AddCategories';
import EditCategories from '../pages/views/Admin/EditCategories';
import Posts from '../pages/views/Admin/Posts';
import AddPosts from '../pages/views/Admin/AddPosts';
import DetailCategories from '../pages/views/Admin/DeatailCategories';
import EditPosts from '../pages/views/Admin/EditPosts';

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Blog from '../pages/views/Main/Blog'


const Routers = ({ products, onRemove, onDelete, onAdd, onUpdate, categories, onAddCate, onUpdateCate, posts, onRemovepost, onAddPost, onUpdatePost }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleAdd =(product)=> {
        onAdd(product)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    const onHandleDelete = (id) => {
        onDelete(id)
    }
    const onHandleAddCate =(category)=> {
        onAddCate(category)
    }
    const onHandleUpdateCate = (id, category) => {
        onUpdateCate(id, category)
    }
    const onHandleRemovepost = (id) => {
        onRemovepost(id)
    }
    const onHandleAddPost =(post)=> {
        onAddPost(post)
    }
    const onHandleUpdatePost = (id, post) => {
        onUpdatePost(id, post)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?/" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} categories={categories} posts={posts}/>
                            </Route>
                            <Route path="/admin/addproducts" exact>
                                <AddProducts onAdd={onHandleAdd} categories={categories}/>
                            </Route>
                            <Route path='/admin/products' exact>
                                <ProductsManager products={products} onRemove={onHandleRemove} categories={categories}/>
                            </Route>
                            <Route path='/admin/detail/:id' >
                                <DetailProducts products={products}/>
                            </Route>
                            <Route path='/admin/products/edit/:id'>
                                <EditProducts products={products} onUpdate={onHandleUpdate}/>
                            </Route>
                            <Route path="/admin/categories" exact>
                                <Categories categories={categories} products={products} onDelete={onHandleDelete}/>
                            </Route>
                            <Route path="/admin/addcategories">
                                <AddCategories onAddCate={onHandleAddCate}/>
                            </Route>
                            <Route path='/admin/categories/edit/:id' >
                                <EditCategories categories={categories} onUpdateCate={onHandleUpdateCate}/>
                            </Route>
                            <Route path ="/admin/posts" exact>
                                    <Posts posts={posts} onRemovepost={onHandleRemovepost}/>
                            </Route>
                            <Route path="/admin/addposts" exact>
                                <AddPosts onAddPost={onHandleAddPost}/>
                            </Route>
                            <Route path='/admin/detailcate/:id' >
                                <DetailCategories categories={categories} products={products}/>
                            </Route>
                            <Route path='/admin/posts/edit/:id' >
                                <EditPosts posts={posts} onUpdatePost={onHandleUpdatePost}/>
                            </Route>
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route>
                    <Main>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products}/>
                            </Route>
                            <Route path="/detail/:id" exact>
                                <About products={products} />
                            </Route>
                            <Route path="/blog" exact>
                                <Blog posts={posts}/>
                            </Route>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
