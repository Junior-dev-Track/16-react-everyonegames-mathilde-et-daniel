// components/Home.jsx

import { useEffect, useState, useRef, useCallback } from 'react';
import GameCard from './GameCard';
import Header from './Header';
import Categories from './Categories';
import FeaturedGame from './FeaturedGame';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function Home() {
    const [games, setGames] = useState([]);
    const [featuredGame, setFeaturedGame] = useState(null);
    const [page, setPage] = useState(1);
    const [ordering, setOrdering] = useState('');
    const [dates, setDates] = useState('');
    const observer = useRef();
  
    const lastGameElementRef = useCallback(node => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setPage(prevPage => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    }, []);

    const currentYear = new Date().getFullYear();
    const startOfYear = `${currentYear}-01-01`;
    const endOfYear = `${currentYear}-12-31`;

    useEffect(() => {
        setDates(`${startOfYear},${endOfYear}`);
    }, []);


    useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&ordering=${ordering}&dates=${dates}`)
        .then(response => response.json())
        .then(data => {
            const newGames = [...games, ...data.results];
            newGames.sort((a, b) => new Date(b.released) - new Date(a.released));
            setGames(newGames);
            setFeaturedGame(data.results[0]);
          });
    }, [page, ordering, dates]);


  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page > 1 ? page - 1 : page);


  const today = new Date();
  const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);


  const selectCategory = (category) => {
    switch (category) {
      case 'new':
        setOrdering('-released');
        setDates(`${startOfYear},${endOfYear}`);
        break;
      case 'nextWeek':
        setOrdering('-released');
        setDates(`${today.toISOString().split('T')[0]},${nextWeek.toISOString().split('T')[0]}`);
        break;
      case 'popular':
        setOrdering('-rating');
        setDates('');
        break;
      default:
        setOrdering('-released');
        setDates('');
    }
    setGames([]);
    setPage(1);
  };


  return (
    <div>
      <Header />
      {featuredGame && <FeaturedGame game={featuredGame} />}
      <div className="container">
        <Categories selectCategory={selectCategory} />
        <div className='game-card-container'>
            {games.map((game, index) => {
                if (games.length === index + 1) {
                return <GameCard ref={lastGameElementRef} key={`${game.id}-${index}`} game={game} />;
                } else {
                return <GameCard key={`${game.id}-${index}`} game={game} />;
                }
            })} 
        </div>
        </div>
    </div>
  );
  
}

export default Home;