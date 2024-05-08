//import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
//import "../App.css";
//import Change_pages from "./Change_pages";

const LesDernier = () => {
  const [data, setData] = useState({
    results: [],
    page_size: [20, 5, 10, 40],
  });
  const [page, setPage] = useState(1);
  useEffect(() => {
    const apiKey = "c9e41bdc1199404487e7c33b3e06be3f";
    if (page && data.page_size) {
      axios
        .get(
          `https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=${data.page_size}`
        )
        .then((response) => {
          setData({ ...response.data, page_size: data.page_size });
        })
        .catch((error) => {
          console.log("Error fetching data", error);
        });
    }
  }, [page, data.page_size]);

  return (
    <div
      style={{
        backgroundColor: "#DEE2E3",
      }}
    >
      <div>
        <label htmlFor="page_size">Nombres de jeux part page:</label>
        <select
          id="page_size"
          value={data.page_size}
          onChange={(e) =>
            setData({ ...data, page_size: parseInt(e.target.value) })
          }
        >
          <option value={20}>20</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={40}>40</option>
          {/* Add more options if necessary */}
        </select>
      </div>
      <br />
      <ul
        style={{
          margin: "0 50px 0 100px ",
          padding: " 0 50px ",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          listStyle: "none",
          justifyContent: "space-around",
          gap: "80px",
          objectFit: "cover",
        }}
      >
        {data.results &&
          data.results
            /*.filter((all_game) => all_game.released)*/
            .sort((a, b) => new Date(b.released) - new Date(a.released))
            .map((all_game, index) => {
              return (
                <li
                  key={index}
                  style={{
                    width: "200px",
                    height: "200px",
                    margin: "5px",
                    objectFit: "cover",
                    border: "2px solid black",
                    borderRadius: "10px",
                    padding: "10px",
                    backgroundColor: "gray",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "white",
                      textTransform: "uppercase",
                    }}
                  >
                    {all_game.slug}
                  </span>
                  <br />
                  {all_game.released}
                  <br />
                  <span
                    style={{
                      background: "white",
                      border: "1px solid black",
                      textTransform: "capitalize",
                    }}
                  >
                    {all_game.genres &&
                      all_game.genres.map((genre) => genre.name + " ")}
                  </span>
                  <br />
                  {/*{all_game.platforms &&
                    all_game.platforms.map(
                      (platform) => platform.platform.name + "\n" + " "
                    )}*/}
                  <img
                    src={all_game.short_screenshots[0].image}
                    alt={all_game.slug}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <br />
                </li>
              );
            })}
      </ul>
      <br />
      <div
        style={{
          margin: "100px 0 100px 0",
          display: "flex",
          gap: 20,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <button className="pre" onClick={() => setPage(page - 1)}>
          Précédent
        </button>
        <div>Page {page}</div>
        <button className="next" onClick={() => setPage(page + 1)}>
          Suivant
        </button>
      </div>
    </div>
  );
};

export default LesDernier;
