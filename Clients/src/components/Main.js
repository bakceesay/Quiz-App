import React, { useRef } from 'react'
import Quiz from './Quiz'
import { Link } from 'react-router-dom'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>    
        
        <ol>
            <li>Welcome to Quiz zone! You are require to answer the following questions</li>
            <li>Welcome to Quiz zone! You are require to answer the following questions</li>
            <li>Welcome to Quiz zone! You are require to answer the following questions</li>
            <li>Welcome to Quiz zone! You are require to answer the following questions</li>
            <li>Welcome to Quiz zone! You are require to answer the following questions</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'}>Start Quiz</Link>
        </div>

    </div>
  )
}

