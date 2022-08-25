
import './App.css';
import NavBarr from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import Home from './Pages/Home';
import CartProvider from './Components/Context/CartContext';
import Cart from './Components/Cart/Cart';
// import { CartProvider } from './Components/Context'



function App() { //eslint-disable-next-line
  const [valor, setValor] = useState("")
  const [cantCarrito, setCantCarrito] = useState(0) //eslint-disable-next-line


  return (

    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <h1 className='banner'>Pagina de impresión 3D</h1>
          <NavBarr setValor={setValor} cantCarrito={cantCarrito} />
          <Routes>
            <Route path="/" element={<Home setCantCarrito={setCantCarrito} cantCarrito={cantCarrito} />} />
            <Route path="/detail/producto:prod" element={<ItemDetailContainer setCantCarrito={setCantCarrito} cantCarrito={cantCarrito} />} />
            <Route path='/category/:catname' element={<ItemListContainer />} />
            <Route path='/Cart' element={<Cart />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Aún no hay contenido para esta sección o ingresó un nombre incorrecto.</p>
                </main>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
