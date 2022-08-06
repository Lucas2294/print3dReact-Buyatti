
import './App.css';
import NavBarr from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';



function App() { //eslint-disable-next-line
  const [valor, setValor] = useState("")
  const [cantCarrito, setCantCarrito] = useState(0) //eslint-disable-next-line
  return (
    <div className="App">
      <h1 className='banner'>Pagina de impresión 3D</h1>
      <NavBarr setValor={setValor} cantCarrito={cantCarrito} />
      <ItemListContainer setCantCarrito={setCantCarrito} cantCarrito={cantCarrito} />
    </div>



    
  );
}

export default App;
