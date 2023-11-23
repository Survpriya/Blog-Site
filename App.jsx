import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactQuill from 'react-quill';
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from './MyComponents/Layout';
import NewPost from './MyComponents/NewPost';
import LogIn from 'C://Users/91913/OneDrive/Desktop/react/Blog-Site/src/MyComponents/LogIn.jsx';
import SignUp from 'C://Users/91913/OneDrive/Desktop/react/Blog-Site/src/MyComponents/SignUp.jsx';
import IndexPage from './MyComponents/IndexPage';

const App = () => {
  return (
    <Routes>
      <Route path= '/' element={<Layout/>}>
      <Route index element= {<IndexPage/>}/>
      <Route path= {'/create'} element={<NewPost/>}/>
      </Route>
      <Route path= {'/login'} element={<LogIn/>}/>
      <Route path= {'/register'} element={<SignUp/>}/>
</Routes>
  )
}
export default App