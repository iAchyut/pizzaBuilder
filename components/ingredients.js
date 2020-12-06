import React from 'react';
import classes from './pizzabuilder.module.css'

const ingredient = (props) => {

    let ing = null;
    switch(props.type) {    
        case 'Cheese':
            ing = <div className={classes.Cheese}></div>
            break;
        case 'Tomato':
           ing = <div><div className={classes.Tomato}></div>
                <div className={classes.Tomato2}></div> </div>
            break;
        case 'PineApple':
            ing =<div> <div className={classes.pineApple}></div>
                <div className={classes.pineApple2}></div> </div>
            break;
        case 'Oregano':
           ing= <div><div className={classes.oregano}></div>
            <div className={classes.oregano1}></div>
            <div className={classes.oregano2}></div>
            <div className={classes.oregano3}></div>
            <div className={classes.oregano4}></div>
            <div className={classes.oregano5}></div>
            <div className={classes.oreganomid}></div>
            </div>
            break;
    }
return (
 ing
);
}
export default ingredient;

