import Home from './Home.js'
import Services from './Services.js'
import ImageGallery from './ImageGallery.js'

import {Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Routes>
   <Route  path="/"element={<Home/>}/>
   <Route path='/services' element={<Services/>}/>
   <Route path='/ImageGallery' element={<ImageGallery/>}/>
   
   </Routes>

    </div>
  );
}

export default App;
