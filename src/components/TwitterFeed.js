import Tweet from './Tweet';
import React from 'react';

const TwitterFeed = props => {
  let tweets = props.data.map(tweet => {
    return (
      <Tweet
        key={tweet.id_str}
        text={tweet.text}
        favorite_count={tweet.favorite_count}
        favorited={tweet.favorited}
      />
    );
  });

  return (
    <ul>
      {tweets}
    </ul>
  );
};


export default TwitterFeed;
