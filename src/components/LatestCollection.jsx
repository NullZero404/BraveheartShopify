import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    //up to 10 products in latest collections, 10 in tutorial
    useEffect(()=>{
        setLatestProducts(products.slice(0,5));
    },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto  sm:text-sm md:text-base text-gray-600'>
        Putanginamo Jhepoy Dizon ang pangit ng pagmumukha mo. PLDT mga bogo manirano ugod mo abdandon ugo 5 games yawa mana oy.
        </p>
      </div>

        {/* rendering products, grids since it's multiple items */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item, index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>

    </div>
  )
}

export default LatestCollection
