import React from 'react'

const product ={
    img :"/image/backpacks-2048px-9904.jpg",
    name :"Backpacks",
    price :"19$",
    description:"comfortable backpacks to help you carry your stuff anywhere",
}
function Productcard3() {
  return (
    <div>
        <div className='card'>
        <img src={product.img} alt=""/>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
    </div>
    </div>
  )
}

export default Productcard3