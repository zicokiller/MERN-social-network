import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils";

/* fonction qui set la logique pour gérer les Abonnements 
(following) et Abonnés (followers) ds les modals du profil*/
function FollowHandler({ idToFollow }) {
  const userData = useSelector((state) => state.userReducer);
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {};

  const handleUnFollow = () => {};

  useEffect(() => {
    if (!isEmpty(userData.following.includes(idToFollow))) {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
  }, [userData, idToFollow]);

  return (
    <div>
      {isFollowed && !isEmpty(userData) && (
        <span onClick={handleUnFollow}>
          <button className="unfollow-btn" >Abonné</button>
        </span>
      )}
      {isFollowed == false && !isEmpty(userData) && (
        <span onClick={handleFollow}>
        <button className="unfollow-btn" >Suivre</button>
      </span>
      )}
    </div>
  );
}

export default FollowHandler;
