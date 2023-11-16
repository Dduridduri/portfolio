import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import BlogPost from './pages/BlogPost';
import Main from './pages/Main';
import SnakeGame from './components/SnakeGame';
import Landing from './components/Landing';
import Works from './components/Works';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from './components/About';
import Quick_Link from './components/Quick_Link';
import Footer from './components/Footer';


function App() {
  return (
   <>
      
    <Landing/>
    {!Main && <Landing/>}
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/blog" element={<BlogPost/>}></Route>
      <Route path="/snakegame" element={<SnakeGame/>}></Route>
      <Route path="/landing" element={<Landing/>}></Route>
      <Route path="/works" element={<Works/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/quicklink" element={<Quick_Link/>}></Route>
      <Route path="/footer" element={<Footer/>}></Route>


    </Routes>

   </>
  );
}

export default App;
