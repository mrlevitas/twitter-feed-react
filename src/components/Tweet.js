import React from 'react';

const Tweet = props => {
  let klass = "not_red";

  if (props.favorited == true)
    klass = "red";

  return (
    <li>
      {props.text}
      <div className={klass}>
        <button className="fa fa-heart" aria-hidden="true"></button>
        {props.favorite_count}
      </div>
    </li>
  );
};

export default Tweet;
