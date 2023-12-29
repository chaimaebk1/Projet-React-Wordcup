
// import Body from "../components/bodyHome";
import Body from "../components/HomePage/bodyHome";
import About from "../components/HomePage/About";
import Foods from "../components/HomePage/Foods";
import Clothes from "../components/HomePage/Clothes";
import Contact from '../components/ContactPages/Contact';
import Header from '../components/Header';

const Home = () => {

  return (
    <div>
      <Header/>
      <Body/>
      <About/>
      <Clothes/>
      <Foods/>
      <Contact/>
    </div>
 
  )
}

export default Home