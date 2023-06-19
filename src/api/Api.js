import axios from 'axios';
export async function productData(){
    // const product = await axios.get('https://fakestoreapi.com/products');
    // const product = await axios.get('https://api.escuelajs.co/api/v1/products');
    const product = await axios.get('https://fakestoreapi.com/products')
    return product;
}