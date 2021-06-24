import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateParser } from "./Utils";
import FollowHandler from "./Profil/FollowHandler";

function Card({ post }) {
  const [isloading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    usersData[0] && setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-container" key={post._id}>
      {isloading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                (usersData[0] &&
                  usersData
                    .map((user) => {
                      if (user._id === post.posterId) return user.picture;
                    })
                    .join("")) ||
                "./uploads/profil/random-user.png"
              }
              alt="poster-pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {usersData[0] &&
                    usersData.map((user) => {
                      if (user._id === post.posterId) return user.pseudo;
                    })}
                </h3>
                {post.posterId !== userData._id && (
                  <FollowHandler idToFollow={post.posterId} type={"card"} />

                )}
              </div>
              <span>{dateParser(post.createdAt)}</span>
            </div>
          </div>
        </>
      )}
    </li>
  );
}

export default Card;
