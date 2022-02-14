import React from 'react'

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

const pics =  photos.map((photo)=>{
    return(
        <img 
        id='image-viewer-image'
        key={photo} 
        src={photo} 
        onClick={showImage}
        alt='gallery-photo'
        width='200px'/>
        )
    })
    
    
    
// function showImage(){
//     document.getElementById('image-viewer').style.display = 'flex'
//     // document.getElementById('image-viewer-image').src = pics.photo.src
//     console.log(document.getElementById('image-viewer-image'))
    //this will be a function that displays the photo that you click on in a larger viewr box
// }
export default function Gallery(){
    
    
    
    return(
        <div className='gallery'>
           {pics}
           {/* <div id='image-viewer'>
              //largr images go in here
            </div> */}
       </div>
   )
}