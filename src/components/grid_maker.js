import React,{useState} from "react";
import './grid_maker.css'
import Navbar from "./navbar";
function MakeGrid(props){
    const [currentScore,setCurrentScore]=useState(0);
    const [highScore,setHighScore]=useState(0);
    const [pic,setPic]=useState(
        [
            {
                "id": "1",
                "name": "BirdPerson",
                "url": "https://cdn.mos.cms.futurecdn.net/8HfL3Urc8RxixAbJmcseEc-970-80.jpg.webp",
                "isClicked": false
            },
            {
                "id": "2",
                "name": "Krombopulos Michael",
                "url":"https://cdn.mos.cms.futurecdn.net/tn89U2CZebnSJBf45acVNK-970-80.jpg.webp",
                "isClicked": false
            },
            {
                "id": "3",
                "name": "Tammy Gueterman",
                "url":"https://cdn.mos.cms.futurecdn.net/YsJrEQ85yDiDL8DyeQ4bH9-970-80.jpg.webp",
                "isClicked": false
                },
            {
                "id": "4",
                "name":"Glootie",
                "url":"https://cdn.mos.cms.futurecdn.net/qHWPtf7WaLrhUMtdyUnQTL-970-80.jpg.webp",
                "isClicked": false
            },
            {
                "id":"5",
                "name":"Dr. Wong",
                "url":"https://cdn.mos.cms.futurecdn.net/XPqZNy3txxTumaY88VtVzL-970-80.jpg.webp",
                "isClicked": false
            },
            {
                "id":"6",
                "name":"The Talking Cat",
                "url":"https://cdn.mos.cms.futurecdn.net/SH6SfPMxgaLNo2ondDnifN-970-80.jpg.webp",
                "isClicked": false
            },
                {
                "id":"7",
                "name":"Mr. Poopybutthole",
                "url":"https://cdn.mos.cms.futurecdn.net/YFxbGRRkEpBZxmR9N7arHK-970-80.jpg.webp",
                "isClicked": false
            },
            {
                "id":"8",
                "name":"Mr. Meeseeks",
                "url":"https://cdn.mos.cms.futurecdn.net/BSxW5At5vB5aWhc5PFZhsH-970-80.jpg.webp",
                "isClicked": false
            },
            {
                "id":"9",
                "name":"Evil Morty",
                "url":"https://cdn.mos.cms.futurecdn.net/ERR2cq2CWayoZsxn38CBRm-970-80.jpg.webp",
                "isClicked": false
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
        return array;
        }
    
    const shuffleArray=()=>{
        const shuffledArray=shuffle(pic);
        setPic([...shuffledArray]);
        
    }
    const handleClick=(e)=>{
        shuffleArray();
        handleScore();
    }
    const handleScore=(id)=>{
        pic.forEach(element=>{
            if(element.id===id && element.isClicked===false){
                element.isClicked=true;
                handleIncrement();
            }
            else if(element.id===id && element.isClicked===true){
                if(currentScore>highScore){
                    setHighScore(currentScore);
                }
                setCurrentScore(0);
                pic.forEach(element=> element.isClicked=false);
            }
        })
    }
    const handleIncrement=()=>{
        setCurrentScore(currentScore++);
    }
        return(
            <div>
                <Navbar currentScore={currentScore} highScore={highScore}/>
                <div className='grid_container'>
                    {pic.map((picture)=>{
                        return <div onClick={()=>handleClick(pic.id)} ><img alt='' className='grid_image' src={picture.url} /> <p className='name'>{picture.name}</p></div>
                    })}
                
            </div>
            </div>
        )
                }
export default MakeGrid;