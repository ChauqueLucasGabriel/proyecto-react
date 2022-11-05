import { useCartContext } from "../../../context/CartContext"

const CartPage = () => {

  const {cartList}=useCartContext()

  return (
    <div>

      <h1>Carrito</h1>

      <ul>
        {cartList.map((product)=><li>{product.name}</li>)}
      </ul>
    </div>
  )
}

export default CartPage