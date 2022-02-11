import React from 'react'
import Logo from '../logo.svg'

export default function PhotoReel(){

const [photoNumber , setPhotoNumber] = React.useState(1)

function forward(){
    if(photoNumber===14){
        setPhotoNumber(1)
    } else{
        setPhotoNumber(photoNumber +1)
    }
}

function back(){
    if(photoNumber ===1){
        setPhotoNumber(14)
    } else{
        setPhotoNumber(photoNumber - 1)
    }
}
    return(
        <div className='photo-reel-container'>
        <div className='photo-reel'>
           
            <button className='back-button' onClick={back}>&lt</button>
            <img className='photo-reel-photo' src={`images/image-${photoNumber}.jpg`} />
            <button className='forward-button' onClick={forward}>"/"</button>
            
        </div>
        </div>

    )
}