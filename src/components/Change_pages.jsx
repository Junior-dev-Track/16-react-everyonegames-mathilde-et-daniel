//import React from 'react';
import { useState } from "react";
//import AllGames from "./AllGames";

const Change_pages = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div
        style={{
          marginTop: "200px",
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

export default Change_pages;
