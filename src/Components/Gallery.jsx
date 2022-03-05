import React from 'react'




let bigImg = document.getElementById('big-image')
let imageViewer = document.getElementById('image-viewer')

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
    'images/image-14.jpg',
    'images/image-15.jpg',
    'images/image-16.jpg'
]







export default function Gallery(){
  
  const [allGallery , setAllGallery] = React.useState(photos)

  



  
  const pics =  allGallery.map((photo , index)=>{


    function openGalleryImage(){  
      let source = pics[index].props.src
      document.getElementById('image-viewer').style.display = 'flex'
      document.getElementById('big-image').src = source
      console.log(document.getElementById('big-image'))
      // bigImg.src = source

     
      }
      
   
      
      return(
        <img
        key={index}
        src={photo}
        width='200px'
        onClick={openGalleryImage}
        />
        )
      })
      
    
      

      

      
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