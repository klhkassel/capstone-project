import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import AddFeeding from '../components/AddFeeding';
import FeedingHistory from '../components/FeedingHistory';
import './Feeding.css'

function Feeding() {
  const [feedList, setFeedList] = useState([]);

  const addFeedingHandler = (feed) => {
    console.log(feed);
    setFeedList([...feedList, { id: uuid(), ...feed }]);
  };

  const removeFeedingHandler = (id) => {
    const newFeedList = feedList.filter((feed) => {
      return feed.id !== id;
    });

    setFeedList(newFeedList);
  };

  return (
    <div className='feeding'>
      <AddFeeding addFeedingHandler={addFeedingHandler}/>
      <FeedingHistory feedList={feedList} getFeedId={removeFeedingHandler} />
    </div>
  );
}

export default Feeding;
