// components/GamePage.jsx

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function GamePage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setGame(data));
  }, [id]);

  return game ? (
    <div>
      <h1>{game.name}</h1>
      {/* Other game details */}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default GamePage;