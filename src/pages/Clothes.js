import Body from "../components/ClothesPages/bodyClothes";
import Contact from '../components/ContactPages/Contact';
import Stores from "../components/ClothesPages/StoreComponent";
import Header from '../components/Header';

const Clothes = () => {

    return (
      <div>
        <Header/>
        <Body/>
        <Stores/>
        <Contact/>
      </div>
   
    )
  }
  
  export default Clothes