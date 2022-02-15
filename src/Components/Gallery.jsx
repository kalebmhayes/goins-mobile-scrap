import React from 'react'

let bigImg = document.getElementById('big-image')

let photos = [
    'images/image-1.jpg',
    'images/image-2.jpg',
    'images/image-3.jpg',
    'images/image-4.jpg',
    'images/image-5.jpg',
    'images/image-6.jpg',
    'images/image-7.jpg',
    'images/image-8.jpg',
    'images/image-9.jpg',
    'images/image-10.jpg',
    'images/image-11.jpg',
    'images/image-12.jpg',
    'images/image-13.jpg',
    'images/image-14.jpg'
]

const pics =  photos.map((photo , index)=>{
    return(
      <img
      key={index}
      src={photo}
      width='200px'
      onClick={()=>{
        document.getElementById('image-viewer').style.display = 'flex' 
        let bigImg = document.getElementById('big-image')
        console.log(pics[index].props.src) 
        console.log(bigImg)
        bigImg.src = pics[index].props.src
        }}
     
      />

        )
    })
    
    
    

export default function Gallery(){
    
    
    
    return(
        <div className='gallery'>
           {pics}
           <div id='image-viewer'>
              <img id='big-image' src='#' width='90%'/>
              <button className='close-btn' onClick={()=>{document.getElementById('image-viewer').style.display='none'}}>Close</button>
            </div>
       </div>
   )
}