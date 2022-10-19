import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../../helpers/gFetch"
import ItemList from "../../Itemlist/ItemList"
import Titulo from "../../Titulo/Titulo"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

const ItemListContainer = ({greeting,titulo}) => {
	const [productos,setProductos]=useState([])
	const [loading,setLoading]=useState(true)

	const { idCategoria } = useParams()
	console.log(idCategoria)

	useEffect( ()=>{
		if (idCategoria){
			gFetch(productos)
			.then(resSgte => setProductos(resSgte.filter(products => products.categoria ===idCategoria)))
			.catch(err=>console.log(err))
			.finally(()=>setLoading(false))
		}else{
			gFetch(productos)
			.then(resSgte=>setProductos(resSgte))
			.catch(err=>console.log(err))
			.finally(()=>setLoading(false))
		}
	},[idCategoria])

  return(
		<div>
			<Titulo titulo={'titulo de itemListContainer'} subtitulo={'Subtitulo de itemlistcontainer'} />
	 		<p>{greeting}</p>  
	 		{loading ? 
			 	<h2>Cargando...</h2> 
		 		:
				<ItemList productos={productos} /> 
	 		}
		</div>


  )
}

export default ItemListContainer