import React, { useEffect, useState } from "react";
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Post from './pages/Post';
import Footer from './components/footer/Footer';
import './App.scss';

function App() {
  const [posts, setPosts] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
      const fetchData = async () => {
          try {
              const postReq = await fetch('https://blog-api-ifcw.onrender.com/posts');
              const postsJson = await postReq.json();
              setPosts(postsJson.posts);

              const userReq = await fetch('https://blog-api-ifcw.onrender.com/users');
              const userJson = await userReq.json();
              setUsers(userJson.users);
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, []); 
  
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home posts={posts} users={users}/> } />
        <Route path='posts' element={ <Post posts={posts} /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
