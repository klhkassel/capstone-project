import React, { useState, useEffect } from 'react'
import AddFeeding from '../components/AddFeeding';
import FeedingHistory from '../components/FeedingHistory';

function Feeding() {

  const [feedList, setFeedList] = useState([]);

  const addFeedingHandler = (feed) => {
    console.log(feed);
    setFeedList([...feedList, feed]);
  };

  // useEffect(() => {

  // },)

  return (
    <div className='feeding'>
      <AddFeeding addFeedingHandler={addFeedingHandler}/>
      <FeedingHistory feedList={feedList} />
    </div>
  )
}

export default Feeding
