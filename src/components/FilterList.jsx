import React from 'react'
import '../styles/filterList.css'

const FilterList = ({ nameLocation,setInputSearch }) => {
const handleClick=id=> setInputSearch(id)

    return (
        <ul className='list__ul' >
            {
                nameLocation?.results.map(result =>(
                    <li onClick={()=>handleClick(result.id)}
                        key={result.id}
                    >
                        {result.name}</li>
                ))
            }
        </ul>
    )
}

export default FilterList