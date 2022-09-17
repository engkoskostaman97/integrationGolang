import React from 'react'
import { useParams } from 'react-router-dom'
import Listfilm from './listfilm'
import Listtrans from './listtrans'

function Listfilms() {
    const params = useParams()
    return (
        <div>
            <Listtrans />
            <Listfilm category={params.category} />
        </div>
    )
}

export default Listfilms