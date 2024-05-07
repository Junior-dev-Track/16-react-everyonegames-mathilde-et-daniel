import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedGame({ game }) {
  return (
    <div className="featured-game-container">
      <div className='featured-game-shadow'></div>
      <img className='featured-game-img' src={game.background_image} alt={game.name} />
    
      <div className="featured-game container">
        <div className='infos'>
          <h2>{game.name}</h2>
          <p>{game.description}</p>
          <Link className="featured-game-link" to={`/game/${game.id}`}>Learn more</Link>
        </div>
        
        {/* Add more game details here */}
      </div>
    </div>
  );
}

export default FeaturedGame;