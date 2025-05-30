import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

// shows products
const ProductItem = ({id, image, name, price}) => {
    
    //peso
    const{currency} = useContext(ShopContext);

  return (
    //Products shown in latest collection
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      {/* //peso + price */}
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
    
  )
}

export default ProductItem
