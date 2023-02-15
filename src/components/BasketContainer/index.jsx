import React from 'react'
import BasketItem from "../BasketItem";
import BasketCalculation from "../BasketCalculation";

export default function BasketContainer({basket,increment,decrement,delFromBasket,clearBasket}) {
  return (
    <div>
        <div>
            {
                 basket.map((product) => <BasketItem key={product.id}
                {...product} increment={increment} decrement={decrement} delFromBasket={delFromBasket}/>)
            }
        </div>
            <BasketCalculation key={basket.id} basket={basket} clearBasket={clearBasket}/>
            
    </div>
  )
}
