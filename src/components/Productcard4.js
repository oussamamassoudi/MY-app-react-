import React from 'react'

const product ={
    img :"image/nikon.jpg",
    name :"Nikon camera",
    price :"256$",
    description:"Nikon new camera help capture your special moments forever",
}
function Productcard4() {
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

export default Productcard4