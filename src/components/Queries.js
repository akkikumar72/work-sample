import axios from "axios";
const BASE_URL = `https://dev-api.danielwellington.com/frontend/`


const getAllProducts = async () => {
    const { data } = await axios.get(`${BASE_URL}products`);
    return data;
};

const getProductAssets = async (key, { id }) => {
    const { data } = await axios.get(`${BASE_URL}/assets/${id}`);
    return data;
};

const getProductDetails = async (key, { id }) => {
    const { data } = await axios.get(`${BASE_URL}/products/${id}`);
    return data;
};

export { getAllProducts, getProductAssets,getProductDetails };
