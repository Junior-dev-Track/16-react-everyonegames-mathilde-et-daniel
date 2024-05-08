import { useEffect, useState } from "react";
import axios from "axios";

const LesPlatformes = () => {
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
          `https://api.rawg.io/api/games/platforms_count?key=${apiKey}&page=${page}&page_size=${data.page_size}`
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
      <div
        style={{
          marginBottom: "50px",
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
          data.results.map((jeux, index) => {
            return (
              <li
                key={index}
                style={{
                  width: "200px",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                {jeux.slug}
                <br />
                <img
                  src={jeux.short_screenshots[0].image}
                  alt={jeux.slug}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default LesPlatformes;
