import './App.css';
import { Route, Routes } from 'react-router-dom';
import BlogPost from './pages/BlogPost';
import Main from './pages/Main';


function App() {
  return (
   <>
   <Routes>
   <Route path="/" element={<Main/>}></Route>
   <Route path="/blog" element={<BlogPost/>}></Route>
   </Routes>
   </>
  );
}

export default App;
