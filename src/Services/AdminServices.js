import { api } from "./api";

export const create = (data) =>{
    return api.post("/blog/create",data)
};

export const updateBlog = (id,data) =>{
    return api.put(`/blog/updateBlog/${id}`, data);
};

export const deleteBlog = (id,data) => {
    return api.delete(`/blog/deleteBlog/${id}`,data);
};

export const getBlogById = (id) => {
    return api.get(`/blog/getBlogById/${id}`);
   
};

export const getAll = () => {
    return api.get("/blog/getAll");
};

export const getBlogCount =() => {
    return api.get("blog/getBlogCount");
};