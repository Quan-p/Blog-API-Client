import React, { useEffect, useState } from "react";
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Post from './pages/Post';
import Footer from './components/footer/Footer';
import './App.scss';

function App() {
  const [posts, setPosts] = useState();
  //const [recentPosts, setRecentPosts] = useState();
  useEffect(() => {
      const fetchPosts = async () => {
          try {
              const req = await fetch('https://blog-api-ifcw.onrender.com/posts');
              const reqJson = await req.json();
              setPosts(reqJson.posts);
              // const sortPosts = reqJson.posts.sort((a, b) =>  new Date(b.date) - new Date(a.date));
              // setRecentPosts(sortPosts.slice(0, 3));
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
