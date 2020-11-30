import React from 'react';
import Button from './button'
import classes from './builder.css'

const Builder = (props) => {
    const ingredients = ['Cheese', 'Tomato', 'PineApple', 'Oregano']
    const mappedIngs = ingredients.map(ing => {
        return (
            <div>
                <p>{ing}</p>
                <Button type='order'  clicked={props.addIng}>Add</Button>
                <Button type='order'  clicked={props.removeIng} >Remove</Button>
            </div>
        );
    })
    return (
        <div className="builder">
            <div className="block">
                <p>Add Ingredients </p>
                {mappedIngs}
            </div>
        </div>
    );
}
export default Builder;