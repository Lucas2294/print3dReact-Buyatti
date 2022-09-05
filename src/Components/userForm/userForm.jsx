import { useContext, useState } from "react";
import { DB } from "../../api/APIFirebase";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import "./userForm.css"
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";



function UserForm(params) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  
  const navigate = useNavigate();
  const { removeItems, carrito } = useContext(CartContext);

  // Handler
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "telephone":
        setTel(value);
        break;
      case "email":
        setEmail(value);
        break;

      default:
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name !== "" && tel !== "" && email !== "") {
        console.log("esta completo");
        createOrder()
        removeItems()
        console.log(name, tel, email);
    } else console.log("esta incompleto");
  }

//   Mandar a DB
const createOrder = ()=>{
    const sendItemsDb = params.item.map(item =>({
      id: item.id,
      title: item.title,
      price: item.price
    }))
    let order = {
      buyer: { 
        name: name, 
        phone: tel,
        email: email, 
      }, 
      items: sendItemsDb,
      date: serverTimestamp(),
      total: params.precioTotal
    }

    console.log(order);
    createOrderInDb(order)
      .then(result=> {
        console.log("Primero");
        alert("Tu orden" + result.id + result)
        console.log("termina la alerta");
        carrito.forEach(async item => {     
            const itemRef = doc(DB, "productos", item.id)
            await updateDoc(itemRef, {
                stock: increment(-item.cant)
            })
        })
        console.log("termina el foreach");
        navigate(`/order/${result.id}`)
        console.log("pasa al navigate");
        removeItems()
        console.log("borra carrito" + carrito);
      })
      .catch(err => console.log(err))
    console.log(order);
  }
  

  const createOrderInDb = async (order)=> {
    const newOrderRef = doc(collection(DB, "orders"))
    await setDoc(newOrderRef, order)
    return newOrderRef
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <div>Nombre</div>
        <input
          type={"text"}
          name={"name"}
          value={name}
          onChange={handleChange}
          className="form-input"
        />
        <div>Teléfono</div>
        <input
          type={"number"}
          name={"telephone"}
          value={tel}
          onChange={handleChange}
          className="form-input"
        />
        <div>E-mail</div>
        <input
          type={"email"}
          name={"email"}
          value={email}
          onChange={handleChange}
          className="form-input"
        />

        <input className="btn-dark btnBuy" type={"submit"} value={"Terminar compra"} />
      </form>
      <h4> Total a pagar : {params.precioTotal.toFixed(2)}</h4>

    </div>
  );
}

export default UserForm;
