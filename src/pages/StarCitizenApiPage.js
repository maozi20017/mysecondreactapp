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

  return (
    <div>
      <StarCitizenApi onSearch={handleSearch} />
      {searchResult && (
        <div>
          <h2>Search Result:</h2>
          <pre>{JSON.stringify(searchResult, null, 2)}</pre>
          <ul>
            <li>profile:{searchResult.data.profile.page.url}</li>
            <li>加入時間:{searchResult.data.profile.enlisted}</li>
            <li>
              <img src={searchResult.data.profile.image} alt="玩家圖片"></img>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default StarCitizenApiPage;
