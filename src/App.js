
import './App.css';
import NavBarr from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Components/NavBar/NavBarcss.css'
// import ItemCount from './Components/ItemCount/ItemCount';
import { useState } from 'react';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() { //eslint-disable-next-line
  const [valor, setValor] = useState("")
  const [cantCarrito, setCantCarrito] = useState(0)
  const [detalles, setdetalles] = useState({})
  return (
    <div className="App">
      <h1 className='banner'>Pagina de impresión 3D</h1>
      <NavBarr setValor={setValor} cantCarrito={cantCarrito} />
      {/* <ItemCount setCantCarrito={setCantCarrito} cantCarrito={cantCarrito}/> */}
      <ItemListContainer setCantCarrito={setCantCarrito} cantCarrito={cantCarrito} setdetalles={setdetalles} />
    </div>



    
  );
}

export default App;
