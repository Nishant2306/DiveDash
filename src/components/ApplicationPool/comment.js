import './comment.css'
import user_black from '../images/user_black.png'
import {useState, useEffect} from 'react'

const Comment = (props) => {
    return(
        <div className='col-md-auto commentAll'>
            <div className='col-md-auto blackImg'><img className="black-Img"src={user_black}></img></div>
            <div className='col-md-auto commentDisplay'>
                <div className='row'>
                    <div className='col commentName'>{props.name}</div>
                    <div className='col commentTime'>{props.time}</div>
                </div>
                <div className='mainComment'>{props.commentContent}</div>
            </div>
        </div>
    );
}

export default Comment;