import styles from "../styles/App.module.css";
import React, { useState } from "react";
import StarCitizenApi from "../components/StarCitizenApi";
function StarCitizenApiPage() {
  //StarCitizenApi
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (playerName) => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://api.starcitizen-api.com/ea8179a4e2b81067dbea45ac03cdb688/v1/live/user/${playerName}`,
          {
            method: "GET",
            headers: {
              Host: "api.starcitizen-api.com",
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();
        setSearchResult(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  };

  return <StarCitizenApi onSearch={handleSearch} />;
}

export default StarCitizenApiPage;
