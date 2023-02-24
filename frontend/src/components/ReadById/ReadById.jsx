import React, { useEffect, useState } from 'react'
import Card from '../cards/Card'

function ReadById() {
    const [item, setItem] = useState([])
    const id = '63e656672cffe544f592081e'

    async function toRequest(){
        //const url = 'http://localhost:3000/itens/' + id
        const url = 'http://backend-jornada-fullstack-fevereiro-23.onrender.com/itens/' + id
        const response = await fetch(url)
        const data = await response.json()
        setItem(data)
    }

    useEffect(function(){ toRequest() }, [])
    

    return (
        <div className='ReadById'><Card item={item} /></div>
    )
}

export default ReadById