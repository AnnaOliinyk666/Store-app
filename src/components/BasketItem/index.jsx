import React from 'react'
import s from './style.module.css'

export default function BasketItem({id,title,price,count,increment,decrement,delFromBasket}) {
  return (
    <div className={s.card}>
        <p>{title}</p>
        <div className={s.info}>
          <p>price: {price}$</p>
          <div className={s.btn}> 
              <p>count</p>
              <button onClick={()=>decrement(id)}>-</button>
              <p>{count}</p>
              <button onClick={()=>increment(id)} >+</button>
              <p>total: {+price*count}$</p>
              <button  onClick={()=>delFromBasket(id)}>X</button>
          </div>
          
        </div>
        
    </div>
  )
}
