import React, { useContext } from 'react'
import Route, { NavLink } from 'react-router-dom'
import classes from './navigation.module.css'
import {PizzaContext} from '../context/pizzaContext'


const Navigation = (props) => {

    const pizzaC = useContext(PizzaContext);

    const openModal =() => {
        console.log('heeeeeeeelooo', pizzaC.isAuthenticated)
        pizzaC.isAuthenticated ? pizzaC.setAuth() :pizzaC.setLModel()  
    }


return (
    <div >
        <li className={classes.NavigationItem}>
        <NavLink to='/'  >Home</NavLink>
<NavLink to='/login' onClick={openModal}>{pizzaC.isAuthenticated ? 'LogOut' :'Login' }</NavLink>
        </li>
    </div>
    )
}

export default Navigation;

