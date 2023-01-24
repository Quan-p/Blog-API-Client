import Nav from './components/nav/Nav';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Post from './pages/Post';
import Footer from './components/footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='posts' element={ <Post/> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
