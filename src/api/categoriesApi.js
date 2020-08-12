import http from "./axiosHttp";

const getAll = () => {
    return http.get("/categories");

};

const removecate = id => {
    console.log(id);
    return http.delete(`/categories/${id}`);
};
const createcate = data => {
    return http.post("/categories", data);
};
const updatecate = (id, data) => {
    return http.put(`/categories/${id}`, data);
};
export default {
    getAll,
    removecate,
    createcate,
    updatecate,

};