import React from 'react'
import {Link} from 'react-router-dom'
import {format} from 'date-fns'

const Post = ({title, summary, cover, content, createdAt }) => {
  return (
    <div className='post' style={{cursor:'pointer'}}>
        <div className='image' >
          <img src={'http://localhost:3000/'+cover} alt='' style={{width:'100%', height:'90%'}}></img>
        </div>
        <div className='content'>
          <h2>{title}</h2>
          <p className="info">
            <Link className= "author">Survpriya</Link>
            <time> {format(new Date(createdAt), 'MMMM do, yyyy HH:mm')}</time>
          </p>
          <p className='summary'>{summary}</p>
        </div>
      </div>
  )
}

export default Post