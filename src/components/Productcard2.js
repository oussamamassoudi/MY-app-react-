import React from 'react'
const product ={
    img :"/image/metal bottle.jpg",
    name :"metal-bottle",
    price :"12$",
    description:"metal-bottle of water to carry with you to the GYM",
}
function Productcard2() {
  return (
    <div className='card'>
    <img src={product.img} alt=""/>
    <h2>{product.name}</h2>
    <p>{product.price}</p>
    <p>{product.description}</p>
</div>
  )
}

export default Productcard2