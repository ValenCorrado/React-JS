import React, { useEffect } from 'react'
import {fetchDataById} from '../services/fetchDataById'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const params  = useParams()

    useEffect(() => {
        fetchDataById(params.id).then(res=>{
            setDetail(res)
        })
    }, [params.id])
    fetchDataById(oarams.id). then(res=>{
        setDetail(res)

    })

    return (
        <div>
            <h2>{detail.name}</h2>
            <p>{detail.description}</p>
            <p>{detail.price}</p>
            <img src={detail.image} alt={detail.name} style={{ width: '100%' }} />
        </div>
    )
}

export default ItemDetailContainer