import React from 'react'
import s from './style.module.css'

export default function Product({id,title,images,description,price,deleteProduct,imageIndex,addInBusket,changePhoto}) {
  return (
    <div className={s.card}>
      <img onClick={()=>changePhoto(id)} className={s.img} src={images[imageIndex % images.length]} alt="какая-то картинка" />
      <div className={s.info}>
        <h2>{title}</h2>
        <p className={s.descr}>{description}</p>
        <div className={s.price_block}>
            <p>{price}$</p>
            <div className={s.btn}>
              <button onClick={()=>deleteProduct(id)}>Dell</button>
              <button onClick={()=>addInBusket(id)}>Add</button>
            </div>
        </div>
        
      </div>
        
        
    </div>
  )
}
