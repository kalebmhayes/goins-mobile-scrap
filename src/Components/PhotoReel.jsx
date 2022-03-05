import React from 'react'
import Left from '../left-arrow.svg'
import Right from '../right-arrow.svg'

export default function PhotoReel(){

const [photoNumber , setPhotoNumber] = React.useState(1)

function forward(){
    if(photoNumber===16){
        setPhotoNumber(1)
    } else{
        setPhotoNumber(photoNumber +1)
    }
}

function back(){
    if(photoNumber ===1){
        setPhotoNumber(16)
    } else{
        setPhotoNumber(photoNumber - 1)
    }
}
setTimeout(forward , 6000)
    return(
        <div className='photo-reel-container'>
        <div className='photo-reel'>
           
            <button className='back-button' onClick={back}><img src={Left}/></button>
            <img className='photo-reel-photo' src={`images/image-${photoNumber}.jpg`} />
            <button className='forward-button' onClick={forward}><img src={Right} /></button>
            
        </div>
        </div>

    )
}