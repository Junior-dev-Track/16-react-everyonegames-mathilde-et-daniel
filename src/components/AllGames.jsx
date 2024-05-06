import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";

const AllGames = () => {
  const [data, setData] = useState({
    results: [],
    page_size: [5, 10, 20, 40],
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
    <div>
      <h1>ALL GAMES</h1>
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
      <ul
        style={{
          margin: "50px 0 ",
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          justifyContent: "space-evenly",
          gap: "40px",
        }}
      >
        {data.results &&
          data.results.map((all_game, index) => {
            return (
              <li
                key={index}
                style={{ width: "200px", height: "200px", margin: "5px" }}
              >
                {all_game.slug}
                <br />
                {all_game.released}
                <br />
                <img
                  src={all_game.short_screenshots[0].image}
                  alt={all_game.slug}
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
      <div
        style={{
          marginTop: 100,
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

export default AllGames;
