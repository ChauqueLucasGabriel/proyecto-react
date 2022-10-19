import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gFetch } from '../../helpers/gFetch'

const ItemList = (producto) => {
  const[productos,setProductos]=useState([])
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    gFetch()
        .then(resSgte=>setProductos(resSgte))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
  },[])
  console.log(producto)
  
  return (
    	<>
			{productos.map(producto=><div	
										key={producto.id} 
										style={{marginLeft:100}}className='col-md-3'>
										<div className="card w-100 mt-5">
											<Link to={`/detalle/ ${producto.id}`}>
										<div className="card-header">
											{`${producto.nombre} -${producto.categoria}`}
										</div>
										<div className="card-body">
											<img src={producto.foto} alt='' className='w-50'/>
												{producto.price}
										</div>
										<div className="card-footer">
											

										</div>

										</Link>
										</div>
			</div>
				)
	}
    
    
    	</>
  )
}

export default ItemList