import {  useCartContext } from '../../context/CartContext'


const ItemDetail = ({product={
	id: 1,
	name:'mouse',
	price:100,
	category:'perifericos',
	stock:10,
	foto:'https://s3-sa-east-1.amazonaws.com/saasargentina/oaPmQNJPQeMZynN9AOk5/imagen'
}
}) => {
	const [addItem] =useCartContext()


	const onAdd=(cantidad=2)=>{
		console.log('onAdd',cantidad)
		addItem({...product,cantidad})
	}

  return (
    <center>
		<h1>ItemDetailContainer</h1>

		<img src={`${product.foto}`}/>
		<p>{product.name}</p>
		<p>{product.price}</p>
		<p>{product.stock}</p>
		<button onClick={()=>onAdd()}>agregar al carrito</button>
	
    </center>
  )
}

export default ItemDetail