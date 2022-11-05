import { Pinwheel } from "@uiball/loaders"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product,setProduct]=useState({})

	const [loading,setLoading]=useState(true)
    
    const{idProduct}=useParams()

    useEffect(()=>{
      const db =getFirestore()
      const queryDoc=doc(db,'products',idProduct)
      getDoc(queryDoc)
      .then(resp=>setProduct({id: resp.id,...resp.data()}))
      .catch(err=>console.log(err))
		  .finally(()=>setLoading(false))

    },[])
	
  return (
    loading ?
        <Pinwheel speed={1.2} size={50}/>
        :
        <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer