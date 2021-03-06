  import React from 'react';
  import { Link } from 'react-router-dom';
  import FollowButtonContainer from '../follow_button/follow_button_container';

  export default ({ viewingSelf, user: { username, img_url, bio, id } }) => {

  return (
      <div className="user-show-details">
        <div className="user-show-details-container">

          <div className="user-show-details-img">
            <div>

              <img src={img_url}
                   className={/svg/.test(img_url) && "svg"}
                   alt="User Portrait"
              />
            </div>
          </div>

          <div className="user-show-details-username">{username}</div>

          <div className="user-show-details-bio">{bio}</div>

          {
            !viewingSelf &&
              <FollowButtonContainer id={id}/>
          }

          <div className="user-show-details-links"></div>

        </div>
      </div>
);
}
