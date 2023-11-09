import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import BlogPost from './pages/BlogPost';
import Main from './pages/Main';
import SnakeGame from './components/SnakeGame';
import Landing from './components/Landing';


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
    </Routes>

   </>
  );
}

export default App;
