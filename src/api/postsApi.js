import http from "./axiosHttp";

const getAll = () => {
    return http.get("/posts");
};
const removepost = id => {
    console.log(id);
    return http.delete(`/posts/${id}`);
};
const createpost = data => {
    return http.post("/posts", data);
};
const updatepost = (id, data) => {
    return http.put(`/posts/${id}`, data);
};
export default {
    getAll,
    removepost,
    createpost,
    updatepost,
    
};