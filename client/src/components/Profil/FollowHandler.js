import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../actions/user.actions";


/* fonction qui set la logique pour gérer les Abonnements 
(following) et Abonnés (followers) ds les modals du profil*/
function FollowHandler({ idToFollow, type }) {
  const userData = useSelector((state) => state.userReducer);
  const [isFollowed, setIsFollowed] = useState(false);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(userData._id, idToFollow));
    setIsFollowed(true);
  };

  const handleUnfollow = () => {
    dispatch(unfollowUser(userData._id, idToFollow));
    setIsFollowed(false);
  };

  useEffect(() => {
    if (userData?.following?.includes(idToFollow)) {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
  }, [userData, idToFollow]);

  return (
    <>
      {(isFollowed && userData) && (
        <span onClick={handleUnfollow}>
          {type === "suggestion" && <button className="unfollow-btn">Abonné</button>}
          {type === "card" && <img src="./img/icons/checked.svg" alt="checked" /> }
        </span>
      )}
      {(isFollowed === false && userData) && (
        <span onClick={handleFollow}>
        {type === "suggestion" && <button className="follow-btn">Suivre</button>}
        {type === "card" && <img src="./img/icons/check.svg" alt="check" />}

      </span>
      )}
    </>
  );
}

export default FollowHandler;
