//import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";
//import { px } from "framer-motion";

const Games = () => {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    axios
      .get(
        "https://api.rawg.io/api/games?key=c9e41bdc1199404487e7c33b3e06be3f&results&short_screenshots&image"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, [pageSize]);

  return (
    <div className="games">
      <h1>GAMES</h1>
      <div>
        <label htmlFor="pageSize">Number of items per page:</label>
        <select
          id="pageSize"
          value={pageSize}
          onChange={(e) => setPageSize(parseInt(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          {/* Ajoutez d'autres options si nécessaire */}
        </select>
      </div>
      <ul
        style={{
          marginTop: "20px",
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          justifyContent: "space-evenly",
          gap: "40px",
        }}
      >
        {data.results &&
          data.results.map((game, index) => {
            /*return <li key={index}>{game.slug}</li>;*/
            return (
              <li key={index} style={{ width: "200px", height: "200px" }}>
                {game.name}

                <br />
                {game.released}
                <img
                  src={game.short_screenshots[0].image}
                  alt={`Game ${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Games;
