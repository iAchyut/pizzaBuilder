import Pizzabuilder from './components/pizzabuilder'
import PizzaContextProvider from './components/context/pizzaContext'

function App() {
  return (
   <div>
     <PizzaContextProvider>
     <Pizzabuilder/>
     </PizzaContextProvider>
   </div>
  );
}

export default App;
