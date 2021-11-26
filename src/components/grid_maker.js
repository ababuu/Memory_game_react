import React,{useState} from "react";
import './grid_maker.css'
// import pictures from './pictures.json'
function MakeGrid(props){
    const [currentScore,setCurrentScore]=useState(0);
    const [highScore,setHighScore]=useState(0);
    const [clicked, setClicked]=useState(false);
    const [pic,setPic]=useState(
        [
            {
              "id": "1",
              "name": "BirdPerson",
              "url": "https://cdn.mos.cms.futurecdn.net/8HfL3Urc8RxixAbJmcseEc-970-80.jpg.webp"
            },
            {
              "id": "2",
              "name": "Krombopulos Michael",
              "url":"https://cdn.mos.cms.futurecdn.net/tn89U2CZebnSJBf45acVNK-970-80.jpg.webp"
            },
            {
              "id": "3",
              "name": "Tammy Gueterman",
              "url":"https://cdn.mos.cms.futurecdn.net/YsJrEQ85yDiDL8DyeQ4bH9-970-80.jpg.webp"
            },
            {
              "id": "4",
              "name":"Glootie",
              "url":"https://cdn.mos.cms.futurecdn.net/qHWPtf7WaLrhUMtdyUnQTL-970-80.jpg.webp"
            },
            {
              "id":"5",
              "name":"Dr. Wong",
              "url":"https://cdn.mos.cms.futurecdn.net/XPqZNy3txxTumaY88VtVzL-970-80.jpg.webp"
            },
            {
              "id":"6",
              "name":"The Talking Cat",
              "url":"https://cdn.mos.cms.futurecdn.net/SH6SfPMxgaLNo2ondDnifN-970-80.jpg.webp"
            },
            {
              "id":"7",
              "name":"Mr. Poopybutthole",
              "url":"https://cdn.mos.cms.futurecdn.net/YFxbGRRkEpBZxmR9N7arHK-970-80.jpg.webp"
            },
            {
              "id":"8",
              "name":"Mr. Meeseeks",
              "url":"https://cdn.mos.cms.futurecdn.net/BSxW5At5vB5aWhc5PFZhsH-970-80.jpg.webp"
            },
            {
              "id":"9",
              "name":"Evil Morty",
              "url":"https://cdn.mos.cms.futurecdn.net/ERR2cq2CWayoZsxn38CBRm-970-80.jpg.webp"
            }
          ]
    );
    
    const shuffle=array=>{
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        console.log('clicked S')
        return array;
        }
    
    const shuffleArray=()=>{
        const shuffledArray=shuffle(pic);
        console.log(pic)
        setPic([...shuffledArray]);
        console.log(pic)
        console.log('clicked SA')
    }
    const handleClick=()=>{
        
        shuffleArray();
        console.log('clicked HC')
    }
        return(
            <div className='grid_container'>
                    {pic.map((picture)=>{
                       return <div onClick={()=>handleClick()} ><img alt='' className='grid_image' src={picture.url} /> <p className='name'>{picture.name}</p></div>
                    })}
                
            </div>
        )
                }
export default MakeGrid;