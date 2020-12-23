import React, {useState,useContext, useEffect} from 'react';
import Builder from './builder'
import Ingredient from './ingredients'
import classes from './pizzabuilder.module.css'
import {PizzaContext} from './context/pizzaContext'
import LoginModal from './LoginModal/loginModal'
import OrderModal from './OrderModal/orderModal'
import Navigation from './Navigations/navigation';
import { Redirect,withRouter } from 'react-router-dom';


const Pizzabuilder = (props) => {

    useEffect( () => {
        console.log("Hello from useEffect");
        console.log(props)
    }, [])

    // const [modalOpen, setModalOpen] = useState(false)
    const [orderModal, setOrderModal] = useState(false)
    const [audio, setAudio] = useState(new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"))

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
    // audio.muted= true;
    // audio.play();
    console.log('modal clicked')
    pizzaContext.setLModel();
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

console.log(pizzaContext.mOpen)

    return (
        <div>
            {(orderModal ? <OrderModal orderModalClicked={clickedOrderModal} orderBoxClicked={stopPropgationOrderModal} /> : null)}
             {(pizzaContext.mOpen? <LoginModal clickedModal={clickedModal} stopPropgation={stopPropgation}/> : <Redirect to='/'/>)}
             <Navigation/>
            <h2 style={{textAlign:"center"}}>Start Building your delicious Pizza</h2>
            <button style={{float:"right", height:"20px", width:"50px"}} onClick={clickedModal}>Login</button>
    <p>Total Cost of Pizza :{pizzaContext.tPrice}</p>
            <div className={classes.Base}>
                {ing}
            </div> 
          
         <Builder addIng={addIngredientHandler} removeIng={removeIngredientHandler} orderModelClicked={clickedOrderModal}/>

        </div>
    );
}

export default withRouter(Pizzabuilder);