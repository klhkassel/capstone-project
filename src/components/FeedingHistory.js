import React from 'react'
import Feeding from '../pages/Feeding'
import FeedingCard from './FeedingCard'

function FeedingHistory(props) {
console.log(props)
    const renderFeeding = props.feedList.map((feed) => {
        return (
            <FeedingCard feed={feed}></FeedingCard>
        )
    })
  
    return (
    <div>
        <h2>Feeding History</h2>
        <div>{renderFeeding}</div>
    </div>
  )
}

export default FeedingHistory
