import React from "react";
import './grid_maker.css'
import pictures from './pictures.json'
function MakeGrid(props){
    const numbers=[1,2,3,4,5,6,7,8,9];
    const handleClick=()=>{
        alert('clikced')
    }
    pictures.forEach((pic,index)=>{
        pic.id=numbers[index]
    })
        return(
            <div className='grid_container'>
                {pictures.map((picture, index)=>{
                    
                    return <div id={index+1} onClick={handleClick}><img alt='' className='grid_image' src={picture.src}/><p className='name'>{picture.name}</p></div>})}
                    {console.log(pictures.map(p=>p.id))}
            </div>
        )
}
export default MakeGrid;