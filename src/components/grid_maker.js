import React from "react";
import './grid_maker.css'
import pictures from './pictures.json'
function MakeGrid(props){
        return(
            <div className='grid_container'>
                {pictures.map(p=>console.log(p.src))}
                {pictures.map((picture)=><div className='gird_item'><img alt='' className='grid_image' src={picture.src}/><p className='name'>{picture.name}</p></div>)}
            </div>
        )
}
export default MakeGrid;