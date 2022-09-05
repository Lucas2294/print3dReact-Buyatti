import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap"; //eslint-disable-next-line
import { Link, useNavigate } from "react-router-dom";
const Item = ({ producto, cantCarrito, setCantCarrito, stock }) => {
  // const sendPage = useNavigate();

  // const loadProductDetails = () => {
  //   sendPage(`detail` + producto.id);
  // };


  return (
    <>
      <div className="tarjeta">
        <h5>{producto.title}</h5>
        <img src={producto.image} height="150" alt="" />
        <div>{producto.price}</div>
        <ItemCount
          setCantCarrito={setCantCarrito}
          cantCarrito={cantCarrito}
          stock={stock}
          producto={producto}
        ></ItemCount>
        <Button className="btn-dark" >
          {/* Details */}
        <Link className="detalleLink" to={`/detail/producto` + producto.id}>Detalle</Link>
        </Button>
      </div>
    </>
  );
};

export default Item;
