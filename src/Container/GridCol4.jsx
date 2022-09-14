import React from 'react'
import MediaCard from '../components/card/card'
import BasicModal from '../components/Modal/BasicModal'

const GridCol4 = ({catName}) => {
  return (
    <div className="card-wrapper">
        <MediaCard catName={catName}/>
        <BasicModal catName={catName} />
    </div>
  )
}

export default GridCol4