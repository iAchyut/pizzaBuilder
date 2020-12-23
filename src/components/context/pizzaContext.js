import React, {useState, useContext} from 'react';
import ingredient from '../ingredients';
import { Redirect } from 'react-router-dom';


export const PizzaContext = React.createContext({
    ings : {},
    changeIng : () => {},
    tPrice : 0,
    TotalPrice :() => {},
    mOpen : false,
    setLModel : () => {},
    isAuthenticated : false,
    setAuth : () => {}
});

 const PizzaContextProvider = (props) => {

    let [isAuth, setAuthentication] = useState(false)
    let [modalOpen, setModalOpen] = useState(false)
    let [ingredients, setIngredients] = useState({Cheese:false,Tomato:false,PineApple:false,Oregano:false});
    let [totalPrice, setTotalPrice] = useState(10);

    const settingIngs =(name,value) => {
        console.log(ingredients);
        let newIng=null;
        let cost=0;
        if(name==='Cheese'){
            cost=4
             newIng = {...ingredients, Cheese:value};
        }
        else if (name==='Tomato')
        {
            cost = 5
             newIng = {...ingredients, Tomato:value};  
        }
        else if (name==='PineApple')
        {
            cost=7
            newIng = {...ingredients, PineApple:value};  
        }
        else if (name==='Oregano')
        {
            cost =2
            newIng = {...ingredients, Oregano:value};  
        }
       
        setIngredients(newIng);
        TotalPrice(value ?cost:-cost)
    }

    const TotalPrice = (cost) => {
        let price = totalPrice+cost;
        setTotalPrice(price);
    }

    const setLoginModal =() => {
        
        if (!isAuth)
        {
            setModalOpen(!modalOpen)
            console.log('setting modal')
        }
        
    } 

    const setAuthenticate = () => {
        setAuthentication(!isAuth);
        if (!isAuth)
        {
            setModalOpen(!modalOpen)
        }
    }
   
    return (
    <PizzaContext.Provider value = {{ings:ingredients,changeIng:settingIngs,tPrice:totalPrice,TotalPrice:TotalPrice, mOpen:modalOpen, setLModel:setLoginModal ,
     isAuthenticated:isAuth, setAuth:setAuthenticate}}>
        {props.children}
    </PizzaContext.Provider>
    )
};

export default PizzaContextProvider;

