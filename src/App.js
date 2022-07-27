
import './App.css';
import NavBarr from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Components/NavBar/NavBarcss.css'
import ItemList from './Components/ItemListContainer/ItemListContainer'
import ItemCount from './Components/ItemCount/ItemCount';
import { useState } from 'react';



function App() {

  const [valor, setValor] = useState("")
  const [cantCarrito, setCantCarrito] = useState(0)
  return (
    <div className="App">
      <h1 className='banner'>Pagina de impresión 3D</h1>
      <NavBarr setValor={setValor} cantCarrito={cantCarrito}/>
      <ItemCount setCantCarrito={setCantCarrito} cantCarrito={cantCarrito}/>
    </div>
  );
}

export default App;
