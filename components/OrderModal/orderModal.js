import React, { useContext } from 'react'
import './orderModal.css'
import {PizzaContext} from '../context/pizzaContext'


const OrderModal = (props) => {

    let ingredients = useContext(PizzaContext);
    let paraIng = Object.keys(ingredients.ings).map( ing => {
        let show = Boolean(ingredients.ings[ing])
        console.log(ingredients.ings[ing])
            return show ? <li> {ing} </li> : null
}
        ) 

    return (
        <div className="orderModal"  onClick={props.orderModalClicked}>
            <div className="orderBox" onClick={props.orderBoxClicked}>
                <h3>Order Summary</h3>
                <h3 style={{textAlign:"left", marginLeft:"5%"}}>Total Price :{ingredients.tPrice}</h3>
                <p style={{textAlign:"left", marginLeft:"5%"}}>Your Pizza Ingredients - </p>
                <ul style={{float:"left"}}>
                {paraIng}
                </ul>
                <br></br>
                <button  className="buttonContinue">Continue</button>
                <button  className="buttonCancel">Cancel</button>
            </div>
        </div>
    );

}

export default OrderModal;