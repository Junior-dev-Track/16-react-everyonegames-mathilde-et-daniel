// components/GameCard.jsx
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GameCard = forwardRef(({ game }, ref) => {
  return (
    <motion.div ref={ref} whileHover={{ scale: 1.1 }} className='game-card'>
      <Link to={`/game/${game.id}`}>
        <img src={game.background_image} alt={game.name} />
        <div className='game-card-info'>
          <h2>{game.name}</h2>
          {/* Other game details */}
        </div>
      </Link>
    </motion.div>
  );
});

export default GameCard;