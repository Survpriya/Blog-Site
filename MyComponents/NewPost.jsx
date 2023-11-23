import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const modules ={
  toolbar: [
    [{'header': [1,2, false]}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': ['-1', '+1']}],
    ['link', 'image'],
    ['clean']
]};
const formats= [
  'header', 'bold', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image'
];

const NewPost = () => {

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  const Navigate = useNavigate()

  const createNewPost = async(e)=>{
    const data= new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    e.preventDefault();
    const response = await fetch('http://localhost:3000/post',{
      method: 'POST',
      body: data,
      // credentials: 'include',
    });
    if(response.ok){
       setRedirect(true);
    }
  }

  if(redirect){
    return  Navigate ('/');
  }

  return (
    <form onSubmit= {createNewPost}>
      <input type='title' 
      placeholder= {'Title'} 
      value= {title} 
      onChange={e=> setTitle(e.target.value)}
      style={{display: 'block', width: '100%', marginBottom: '25px', 
      height: '3.5vmax', fontSize: '1.5vmax', padding:'5px', border:"solid grey 2px", borderRadius:'10px'}} />

      <textarea type='summmary' 
      placeholder= {'Summary'} 
      value= {summary} 
      onChange={e=> setSummary(e.target.value)}
      style={{display: 'block', width: '100%', marginBottom: '25px', 
      height: '3.5vmax', fontSize: '1.5vmax', padding:'5px', border:"solid grey 2px", borderRadius:'10px'}} />
      
      <input type='file'
      style={{display: 'block', width: '100%', marginBottom: '35px'}}
      onChange={e=> setFiles(e.target.files)}
      />
      <ReactQuill value={content} 
      onChange={newValue => setContent(newValue)}
      module ={modules}
      formats={formats}
      placeholder= {'Write here........'} 
      style={{display: 'block', width: '100%', marginBottom: '35px',
       fontSize: '20px', padding:'0px', border:"solid grey 2px", borderRadius:'4px'}}
      />
      <button className= 'btn'
      style={{marginTop: '5px', marginLeft: '50%', marginTop: '35px', height: '3vmax', background:'black', color:'white', border:"solid grey 2px", borderRadius:'10px'}}>Publish</button>
    </form>
  )
}
export default NewPost