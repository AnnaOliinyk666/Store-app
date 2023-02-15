import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import BasketContainer from '../BasketContainer';
import Product from "../Product";
import s from './style.module.css'
import Modal from "../Modal";

export default function ProductsContainer() {

    useEffect(() => {
        (async () => {
            const resp = await fetch ('https://dummyjson.com/products')
            const data = await resp.json()
            const productsNew = data.products.map(({id,title,price,description,images}) => ({id,title,price,description,images,imageIndex:0}))
    

            setProducts(productsNew);
        })()
    },[]);

    

    const [products, setProducts] = useState(null);
    const [basket, setBasket] = useState(()=> JSON.parse(localStorage.getItem('basket')) ?? []);
    const [modal,setModal] = useState(false)

    useEffect(()=>{localStorage.setItem('basket', JSON.stringify(basket))},[basket])

    useEffect(()=>{
      if(products === null){
        return
      }
      const prodIds = products.map(({id})=>id);
      setBasket(pre  => pre.filter(({id}) => prodIds.includes(id)));
    },[products])

    // let imageIndex = 0;
    // function slideImage() {
    //   console.log(image[imageIndex]);
    //   imageIndex= imageIndex === image.lenght -1 ? 0 : imageIndex + 1;
    // }

    // {for (let i = 50; i !==0; i--) {
    //   console.log(image[i%image.lenght])
    // }}
   

    const deleteProduct = (delID) => {
      const newProducts = products.filter(({id}) => id !==delID);
      setProducts(newProducts);
    };
    const delFromBasket = (delId) => {
      const newBasket = basket.filter(({id}) => id !==delId);
      setBasket(newBasket);
    }
    const clearBasket = () => {
      setBasket([]);
    }

    const addInBusket = (addID) => {
      const basketExist = basket.find(({id}) => id ===addID) 
      if (basketExist) {
        basketExist.count++;
        setBasket([...basket]);
      } else{
        const basketnew = products.find(({id}) => id ===addID);
        basketnew.count = 1;
        setBasket([...basket,basketnew]);
      }  
    };
    const increment = (inId) => {
      const basketExist = basket.find(({id}) => id ===inId)
      basketExist.count++;
        setBasket([...basket]);
    }

    const decrement = (inId) => {
      const basketExist = basket.find(({id}) => id ===inId)
      if (basketExist.count > 1) {
        basketExist.count--;
      setBasket([...basket]);
      } else {
        delFromBasket(inId)
      }
    }
    const changePhoto = (prodID) => {
      products.find(({id}) => id===prodID).imageIndex++;
      setProducts([...products])
    }
    
    const openModal = () => {
      setModal(true)
    }

    const closeModal = () => {
      setModal(false)
    }

    

  return (
    <div>
      <button onClick={()=>openModal()}>
          Basket ({basket.reduce((acc,{count}) => acc + count,0)})
      </button>
      {
        modal
        ? <Modal closeModal={closeModal}>
          
        <h1>Basket</h1>
        <BasketContainer basket={basket}increment={increment} decrement={decrement} delFromBasket={delFromBasket} clearBasket={clearBasket}  />
        </Modal>
        : ""
       }
       
      

      <h1>Products</h1>
      <div className={s.container}>
        {
          products===null
          ? 'Upload in progres'
          : products.map((product) => <Product key = {product.id} {...product}  deleteProduct={deleteProduct}
          addInBusket={addInBusket}
          changePhoto={changePhoto}
        
        />)
        }
        </div>
    </div>
  )
}
