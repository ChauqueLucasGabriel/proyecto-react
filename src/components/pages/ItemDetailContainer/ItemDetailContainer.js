import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../../helpers/gFetch"
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [productos,setProductos]=useState([])

	const [loading,setLoading]=useState([true])
    
    const{idProducto}=useParams()
	console.log(idProducto)
    

  return (
	<>
	</>
  )
}

export default ItemDetailContainer