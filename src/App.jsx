import React, { useEffect, useState } from "react";
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Post from './pages/Post';
import Footer from './components/footer/Footer';
import './App.scss';

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
      const fetchPosts = async () => {
          try {
              const req = await fetch('https://blog-api-ifcw.onrender.com/posts');
              const reqJson = await req.json();
              setPosts(reqJson.posts);
          } catch (err) {
              console.log(err);
          }
      }
      fetchPosts();
  }, []); 
  
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home posts={posts} /> } />
        <Route path='posts' element={ <Post posts={posts} /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
