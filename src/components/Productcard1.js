import React from 'react'


const product ={
    img :"/image/i-phone.jpg",
    name :"I-phone 13",
    price :"299$",
    description:"Our latest smart phone",
}
function Productcard1() {
  return (
    <div className='card'>
        <img src={product.img} alt=""/>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
    </div>
  )
}

export default Productcard1