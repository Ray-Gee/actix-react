import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

interface ApiResponse {
  id: number
  title: string
}

const ApiFetch = () => {
  const [posts, setPosts] = useState<ApiResponse[]>([])
  
  useEffect(() => {
    axios.get<ApiResponse[]>("http://0.0.0.0:4000/")
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
        console.log("ここ", posts)
      })
  }, [])

  return (
    <div>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}hi</li>)}
      </ul>
    </div>
  ) 
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ApiFetch/>
      </header>
    </div>
  );
}

export default App;
