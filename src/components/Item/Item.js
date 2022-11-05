import { memo } from "react"
import { Link } from "react-router-dom"

const Item = memo((prod) => {
  return (
    <div            
            style={{ marginLeft: 100}}
            className='col-md-3'
        >    
            <Link to={`/detalle/${prod.id}`}>
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${prod.name} - ${prod.category}`}
                    </div>
                    <div className="card-body">
                        <img src={prod.foto} alt='' className='w-50' />
                        {prod.price}                                                            
                    </div>
            
                    <div className="card-footer">                                                        
                        {/* <button className="btn btn-outline-primary btn-block">
                            detalle del prod
                        </button> */}
                    </div>
                </div>
            </Link>                   

        </div> 

  )
}
)

export default Item