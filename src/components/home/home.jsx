import React from 'react';
import Slider from '../Slider/slider.jsx';
import MediaCard from '../card/card';
import './home.css'
import GridCol4 from '../../Container/GridCol4.jsx';
import {HomeData} from  './HomeData.js'
const home = () => {
  return (
    <>
    <div className='h-wrapper'>
        <Slider />
        <h3 className="heading">Top Selling Products</h3>
    </div>
    <GridCol4 catName={HomeData}/>
    </>
    
  )
}

export default home