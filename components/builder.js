import React,{useContext} from 'react';
import Button from './button'
import classes from './builder.css'
import {PizzaContext} from './context/pizzaContext'

const Builder = (props) => {
    const ingredients = ['Cheese', 'Tomato', 'PineApple', 'Oregano']
    let context = useContext(PizzaContext)
    console.log(context.ings)
    const mappedIngs = ingredients.map(ing => {
        let enabled =false;
        if(ing in context.ings)
        {
          enabled= (context.ings[ing]);
        }
        return (
            <div>
                <p>{ing}
                <Button type='order' key={ing}  clicked={() => props.addIng(ing)} enabled={enabled}>Add</Button>
                <Button type='order'  key={ing+1} clicked={() => props.removeIng(ing)}  enabled={!enabled} >Remove</Button>
                </p>
            </div>
        );
    })
    return (
        <div className="builder">
            <div className="block">
                <h3>Add Ingredients </h3>
                {mappedIngs}
                <button style={{}} onClick={props.orderModelClicked}>Order </button>
            </div> 
        </div>
    );
}
export default Builder;