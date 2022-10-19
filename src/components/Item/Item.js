import { Link } from "react-router-dom";

import React from 'react'

const Item = ({productos}) => {
  return (
    <div            
            style={{ marginLeft: 100}}
            className='col-md-3'
        >    
            <Link to={`/detalle/${productos.id}`}>
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${productos.name} - ${productos.categoria}`}
                    </div>
                    <div className="card-body">
                        <img src={productos.foto} alt='' className='w-50' />
                        {productos.price}                                                            
                    </div>
            
                    <div className="card-footer">                                                        
                        {/* <button className="btn btn-outline-primary btn-block">
                            detalle del productos
                        </button> */}
                    </div>
                </div>
            </Link>                   

        </div> 

  )
}

export default Item