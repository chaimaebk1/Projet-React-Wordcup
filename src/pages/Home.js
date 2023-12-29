
// import Body from "../components/bodyHome";
import Body from "../components/HomePage/bodyHome";
import About from "../components/HomePage/About";
import Foods from "../components/HomePage/Foods";
import Clothes from "../components/HomePage/Clothes";
import Contact from '../components/ContactPages/Contact';

const Home = () => {

  return (
    <div>
      <Body/>
      <About/>
      <Clothes/>
      <Foods/>
      <Contact/>
    </div>
 
  )
}

export default Home