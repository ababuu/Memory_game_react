import React,{useState} from "react";
import './grid_maker.css'
import Navbar from "./navbar";
function MakeGrid(props){
    let [currentScore,setCurrentScore]=useState(0);
    let [highScore,setHighScore]=useState(0);
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
            },
            {
                "id":"10",
                "name":"Squanchy",
                "url":"https://i.pinimg.com/originals/0d/a9/36/0da936165e05585c4f95c641799db250.jpg",
                "isClicked": false
            },
            {
                "id":"11",
                "name":"Jessica",
                "url":"https://www.looper.com/img/gallery/why-jessica-from-rick-and-morty-season-5-episode-1-has-fans-scratching-their-heads/l-intro-1624385923.jpg",
                "isClicked": false
            },
            {
                "id":"12",
                "name":"Doofus Rick",
                "url":"https://i.pinimg.com/originals/65/d5/01/65d50155249ae2e6fc683cae1f5d788c.jpg",
                "isClicked": false
            },
            {
                "id":"13",
                "name":"SnowBall",
                "url":"https://i.pinimg.com/564x/b0/2a/95/b02a95ae0658e18e855abb14459e2ee6.jpg",
                "isClicked": false
            },
            {
                "id":"14",
                "name":"Pickel Rick",
                "url":"https://i.pinimg.com/564x/4b/79/79/4b79793d2fc4b9a87cb307681bb2f186.jpg",
                "isClicked": false
            },
            {
                "id":"15",
                "name":"Jerry",
                "url":"https://i.pinimg.com/564x/72/c3/3b/72c33b5df086100cfcd1c29aa02020b6.jpg",
                "isClicked": false
            },
            {
                "id":"16",
                "name":"Beth",
                "url":"https://i.pinimg.com/564x/9f/31/10/9f3110538e83e58d1399ed633b35f1e1.jpg",
                "isClicked": false
            },
            {
                "id":"17",
                "name":"Summer",
                "url":"https://i.pinimg.com/564x/9b/f0/ff/9bf0ff7215ca2e5387a0377f955e5d0e.jpg",
                "isClicked": false
            },
            {
                "id":"18",
                "name":"Scary Terry",
                "url":"https://i.pinimg.com/564x/90/6b/f4/906bf4b045de705a805e23249a891c5b.jpg",
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
    const handleClick=(id)=>{
        shuffleArray();
        handleScore(id);
    }
    const handleScore=(id)=>{
        console.log(id);
        pic.forEach(element=>{
            if(element.id===id && element.isClicked===false){
                element.isClicked=true;
                handleIncrement();
            }
            else if(element.id===id && element.isClicked===true){
                if(currentScore>highScore){
                    alert('Game Over! New High Score!');
                    setHighScore(currentScore);
                }
                else if(currentScore<=highScore){
                    alert('Game Over!');
                }
                else if(currentScore==18){
                    alert('Congratulations you have completed the game');
                }
                setCurrentScore(0);
                pic.forEach(element=> element.isClicked=false);
            }

        })
    }
    const handleIncrement=()=>{
        setCurrentScore(currentScore+1);
    }
        return(
            <div>
                <Navbar currentScore={currentScore} highScore={highScore}/>
                <div className='grid_container'>
                    {pic.map((picture)=>{
                        return <div className='grid-item' onClick={()=>handleClick(picture.id)} ><img alt='' className='grid_image' src={picture.url} /> <p className='name'>{picture.name}</p></div>
                    })}
                
            </div>
            </div>
        )
                }
export default MakeGrid;