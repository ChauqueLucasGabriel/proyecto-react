import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../Itemlist/ItemList"
import Titulo from "../../Titulo/Titulo"
import {Pinwheel} from '@uiball/loaders'
import{collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = ({greeting,titulo}) => {
	const [products,setProducts]=useState([])
	const [loading,setLoading]=useState(true)

	const { idCategory } = useParams()

	useEffect(()=>{
		const db= getFirestore()
		const queryCollection= collection(db,'products')
		getDocs(queryCollection)
		.then(resp=>setProducts(resp.docs.map(prod=>({id:prod.id,...prod.data() }))))
		.catch(err=>console.log(err))
		.finally(()=>setLoading(false))
	},[idCategory])

  return(
		<div>
			<Titulo titulo={''} subtitulo={''} />
	 		<p>{greeting}</p>  
	 		{loading ? 
			 	<Pinwheel speed={1.2} size={50}/> 
		 		:
				<ItemList products={products} /> 
	 		}
		</div>


  )
}

export default ItemListContainer