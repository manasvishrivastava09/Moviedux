import React from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function Watchlist({movies, watchlist, toggleWatchlist}){

    return(
        <div>
            <h1>Your Watchlist!</h1>
            <div className='watchlist'>
            {
                watchlist.map(id=>{
                    const movie = movies.find(movie => movie.id === id);
                    return <MovieCard key={id} movie={movie} toggleWathlist={toggleWatchlist} isWatchlisted={true}></MovieCard>
                })
            }
            </div>
        </div>
    );
}