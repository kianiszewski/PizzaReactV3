import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import RegisterPage from './components/Register/Register';
import LoginPage from './components/LoginPage/LoginPage';
import { pizzaCart } from './assets/pizza';
import Cart from './components/Cart/Cart';
import Pizza from './components/Pizza/Pizza';




function App() {
  return (
    <>
    <Navbar/>
{/*     <Home/> */}
{/*     <RegisterPage/> */}
{/*     <LoginPage/> */}
{/*     <Cart/> */}
    <Pizza/>

    <Footer/>
    </>
  );
}

export default App;
