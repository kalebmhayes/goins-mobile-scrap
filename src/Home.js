import react from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import MainContent from './Components/MainContent.jsx';
import PhotoReel from './Components/PhotoReel.jsx';

function Home(){
    return(
        <div>
      <Header />
      <PhotoReel />
      <MainContent />
      <Footer />
        </div>
    )
}
export default Home