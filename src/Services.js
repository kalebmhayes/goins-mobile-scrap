import react from "react";
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import PriceList from './Components/PriceList.jsx'
import ServicesInfo from './Components/ServicesInfo.jsx'

export default function Services(){
    return(
        <div>
            <Header/>
            <ServicesInfo/>
            <PriceList/>
            <Footer/>
        </div>
    )
}