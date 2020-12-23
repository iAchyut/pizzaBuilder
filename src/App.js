import Pizzabuilder from './components/pizzabuilder'
import {Switch, Route, BrowserRouter, withRouter} from 'react-router-dom'
import LoginModal from './components/LoginModal/loginModal'
import {PizzaContext} from './components/context/pizzaContext'
import React, {useContext} from 'react'

function App() {
  const pizzaContext = useContext(PizzaContext)
 
  return (
   <div>
     
      <BrowserRouter>
      <Switch>
          <Route path="/login">
            <Pizzabuilder />
          </Route>
          <Route path="/">
          <Pizzabuilder />
          </Route>
        </Switch>
     </BrowserRouter>
   </div>
  );
}

export default (App);
