import React from 'react'
import s from './style.module.css'

export default function BasketCalculation({basket,clearBasket}) {
    const calculationSum = basket.reduce((acc,{count,price}) => acc+(price*count),0);
    
    const calculationCount = basket.reduce((acc,{count}) => acc + count,0);
            
  return (
    <div className={s.block}>
        <p>Total sum: {calculationSum}$</p>
        <p>total count:{calculationCount} </p>
        <button onClick={clearBasket}>clear basket</button>
    </div>
  )
}
