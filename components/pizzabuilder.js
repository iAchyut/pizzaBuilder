import React, {useState,useContext, useEffect} from 'react';
import Builder from './builder'
import Ingredient from './ingredients'
import classes from './pizzabuilder.module.css'
import {PizzaContext} from './context/pizzaContext'
import LoginModal from './LoginModal/loginModal'
import OrderModal from './OrderModal/orderModal'

export default Pizzabuilder  => {

    useEffect( () => {
        console.log("Hello from useEffect");
    }, [])

    const [modalOpen, setModalOpen] = useState(false)
    const [orderModal, setOrderModal] = useState(false)

    const pizzaContext = useContext(PizzaContext)
    let ing = Object.keys(pizzaContext.ings).map(ingName => {
        return pizzaContext.ings[ingName]? <Ingredient type={ingName} key={ingName}/> : null
    })
   
    const addIngredientHandler = (key) => {
        console.log(key)
     pizzaContext.changeIng(key,true)
    }

    const removeIngredientHandler = (key) => {
        console.log(key)
     pizzaContext.changeIng(key,false)
    }

const clickedModal = () => {
    setModalOpen(!modalOpen)
    }
const stopPropgation = (e) => {
    e.stopPropagation();
}

const clickedOrderModal = () => {
    setOrderModal(!orderModal)
    }
const stopPropgationOrderModal = (e) => {
    e.stopPropagation();
}

    return (
        <div>
            {(orderModal ? <OrderModal orderModalClicked={clickedOrderModal} orderBoxClicked={stopPropgationOrderModal} /> : null)}
             {(modalOpen ? <LoginModal clickedModal={clickedModal} stopPropgation={stopPropgation}/> : null)}
            <p>Start Building your delicious Pizza</p>
            <button style={{float:"right", height:"20px", width:"50px"}} onClick={clickedModal}>Login</button>
    <p>Total Cost of Pizza :{pizzaContext.tPrice}</p>
            <div className={classes.Base}>
                {ing}
            </div> 
          
         <Builder addIng={addIngredientHandler} removeIng={removeIngredientHandler} orderModelClicked={clickedOrderModal}/>

        </div>
    );
}