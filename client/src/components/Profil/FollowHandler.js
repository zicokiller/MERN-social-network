import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

/* fonction qui set la logique pour gérer les Abonnements 
(following) et Abonnés (followers) ds les modals du profil*/
function FollowHandler({ idToFollow }) {
    const userData = useSelector((state) => state.userReducer);
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow = () => {}


    const handleUnFollow = () => {}

    useEffect(() => {

    }, [userData, idToFollow]);

  return (
  <div>

  </div>
  )
}

export default FollowHandler;
