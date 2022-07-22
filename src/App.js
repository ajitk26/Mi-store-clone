import './App.css';
import PreNavbar from './components/PreNavbar.js';
import Navbar from './components/Navbar.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Slider from './components/Slider.js'
import data from './data/data.json'
import Offers from './components/Offers.js'
import Heading from './components/Heading.js'
import StarProduct from './components/StarProduct.js'
import HotAccessMenu from './components/HotAccessMenu.js'
import HotAccessories from './components/HotAccessories.js' 
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <BrowserRouter>
    
      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/> 
      <HotAccessMenu/>
      <Routes>
          <Route exact path="/" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>

          <Route exact path="/music"element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>
        
          <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/>
            
          <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}/>
          
          <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}/>
            
          <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}/>
      
      </Routes>

      <Heading text="PRODUCT REVIEWS"/> 
      <ProductReviews  productReviews={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>


    </BrowserRouter>
    
  );
}
export default App;
