import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="heading">Join</div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className='joinInput mt-20' 
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <input 
                        type="text" 
                        placeholder="Room" 
                        className='joinInput' 
                        onChange={e => setRoom(e.target.value)}
                        required
                    />
                </div>
                <Link 
                    onClick={e => (!name || !room)? e.preventDefault() : null } 
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <button type="submit" className="button mt-20">Sign in</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
