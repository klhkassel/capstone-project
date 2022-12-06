import React from 'react'

function FeedingCard(props) {
  
    const { dog, user, date } = props.feed;
    return (
    <div>
        <div className='item'>
            <div className='content'>
                <div>Date: {date}</div>
                <div>User: {user}</div>
            </div>
        </div>
        <i
            className='delete'
        ></i>
    </div>
  )
}

export default FeedingCard
