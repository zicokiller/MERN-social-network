import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Card({post}) {
    const [isloading, setIsLoading] = useState(true);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);

    useEffect(() => {
      (usersData[0]) && setIsLoading(false);
    }, [usersData]);

  return (
  <li className="card-container" key={post._id}>
      {isloading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
          <div>
              <div className="card-left">
                  <img src={
                      (usersData[0]) && 
                        usersData.map((user) => {
                            if (user._id === post.posterId)
                            return user.picture;
                        }).join("")
                        
                  } alt="poster-pic" />
              </div>
          </div>
      )}
  </li>
  )
}

export default Card;
