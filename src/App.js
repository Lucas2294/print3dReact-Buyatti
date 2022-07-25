
import './App.css';
import NavBarr from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Components/NavBar/NavBarcss.css'
import ItemList from './Components/ItemListContainer/ItemListContainer'
import { useState } from 'react';



function App() {

  const [valor, setValor] = useState("")
  return (
    <div className="App">
      <h1 className='banner'>Pagina de impresión 3D</h1>
      <NavBarr setValor={setValor}/>
      <ItemList greeting="Bienvenidos a mí página de Impresión 3D, donde encontraras tanto productos en stock como personalizados."/>
    </div>
  );
}

export default App;
