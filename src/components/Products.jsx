import React from 'react'
import ProductCart from './ProductCart'

const Products = ({products}) => {
  // console.log(products);
  return (
    <div>
        <h1 className='text-center mt-3 text-3xl font-bold '>Shop Now</h1>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-6'>
            {
              products.map((item)=> (
                <ProductCart key={item.id} product={item} />
              ))
            }
        </div>
    </div>
  )
}

export default Products