import React, { useState, useEffect } from 'react';
import Routers from './routers'
import apiRequest from './api/productApi'
import CateRequest from './api/categoriesApi'
import PostRequest from './api/postsApi'

function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  // list product
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);
  // list cate
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await CateRequest.getAll();
        setCategories(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCategories();
  }, []);
  // list post
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await PostRequest.getAll();
        setPosts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getPosts();
  }, []);
  // Delete sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  //delete danh mục
  const onHandleDelete = async (id) => {
    try {
      const { data } = await CateRequest.removecate(id);
      const newCategories = categories.filter((categori) => categori.id !== id);
      setCategories(newCategories);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
   // Delete bài viết
   const onHandleRemovepost = async (id) => {
    try {
      const { data } = await PostRequest.removepost(id);
      const newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Add sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([...products, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  //add danh mục
  const onHandleAddCate = async (category) => {
    try {
      const { data } = await CateRequest.createcate(category);
      setCategories([...categories, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Add sản phẩm
  const onHandleAddPost = async (post) => {
    try {
      const { data } = await PostRequest.createpost(post);
      setPosts([...posts, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  //edit sản phẩm
  const onHandleUpdate = async (updateProducts) => {
    const newProducts = products.map(
      (Products) =>
        Products.id === updateProducts.id ? updateProducts : Products // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await apiRequest.update(updateProducts.id, updateProducts);
    setProducts(newProducts);
  };
  //edit danh mục
  const onHandleUpdateCate = async (updateCategories) => {
    const newCategories = categories.map(
      (Categories) =>
        Categories.id === updateCategories.id ? updateCategories : Categories // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await CateRequest.updatecate(updateCategories.id, updateCategories);
    setCategories(newCategories);
  };
  //edit bài viết
  const onHandleUpdatePost = async (updatePosts) => {
    const newPosts = posts.map(
      (Posts) =>
        Posts.id === updatePosts.id ? updatePosts : Posts // Nếu Products.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    const { data } = await PostRequest.updatepost(updatePosts.id, updatePosts);
    setPosts(newPosts);
  };
  return (
    <div className="App">
      <Routers 
      products={products}  
      onRemove={onHandleRemove} 
      onAdd={onHandleAdd} 
      onUpdate={onHandleUpdate}
      categories={categories}
      onDelete={onHandleDelete}
      onAddCate={onHandleAddCate}
      onUpdateCate={onHandleUpdateCate}
      posts={posts}
      onRemovepost={onHandleRemovepost}
      onAddPost={onHandleAddPost}
      onUpdatePost={onHandleUpdatePost}
      />
    </div>
  )

}
export default App;