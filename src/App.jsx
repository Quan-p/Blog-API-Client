import React, { useEffect, useState } from "react";
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Post from './pages/Post';
import Footer from './components/footer/Footer';
import './App.scss';
import PostDetails from "./components/post_details/PostDetails";

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
  
  const handleGetAuthorUsername = (authorId) => {
    const author = users.find(user => user._id == authorId);
    return author ? author.username : null;
  }

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={ <Home posts={posts} users={users}/> } />
          <Route path='posts' element={ <Post posts={posts} /> } />
          <Route path='/posts/:postid' element={ <PostDetails posts={posts} users={users} handleGetAuthorUsername={handleGetAuthorUsername} /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
