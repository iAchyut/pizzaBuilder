import React, {useState} from 'react';
import Classes from './pizzabuilder.css'
import Builder from './builder'

export default Pizzabuilder  => {
    
    const [ingredients, setIngredients] = useState([{cheese:0,tomato:0,pineApple:0,oregano:0}])

    return (
        <div>
            <p>Start Building your delicious Pizza</p>
            <div className="base">
            <div className="cheese">
            <div className="tomato"></div>
            <div className="tomato2"></div>
            <div className="pineApple"></div>
            <div className="pineApple2"></div>
            <div className="oregano"></div>
            <div className="oregano"></div>
            <div className="oregano1"></div>
            <div className="oregano2"></div>
            <div className="oregano3"></div>
            <div className="oregano4"></div>
            <div className="oregano5"></div>
            <div className="oreganomid"></div>
            </div>
            </div>
         <Builder ingredients={ingredients}/>

        </div>
    );
}