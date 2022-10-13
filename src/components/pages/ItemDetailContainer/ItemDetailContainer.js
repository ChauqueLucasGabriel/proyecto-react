import { useEffect, useState } from "react"
import { gFetch } from "../../../helpers/gFetch"
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [productos,setProductos]=useState([])

	const [loading,setLoading]=useState([true])


	useEffect(()=>{
	gFetch()
		.then(resSgte=>setProductos(resSgte))
		.catch(err=>console.log(err))
		.finally(()=>setLoading(false))
	},[])


  return (
        <ItemDetail
        {...loading ?	
            <h2>Cargando...</h2>
                    :
            productos.map( producto=><div 
                                        key={producto.id}
                                        style={{ marginLeft: 100}}
                                        className='col-md-3'>    
                                        <div className="card w-100 mt-5" >
                                        <div className="card-header">
                                            {`${producto.nombre} - ${producto.categoria}`}
                                        </div>
                                    <div className="card-body">
                                        <img src={producto.foto} alt='' className='w-50' />
                                        {producto.price}                                                            
                                    </div>
                            
                                    <div className="card-footer">                                                        
                                     <button className="btn btn-outline-primary btn-block">
                                            detalle del producto
                                        </button> 
                                    </div>
                                </div>
            </div> )}
        />

  )
}

export default ItemDetailContainer