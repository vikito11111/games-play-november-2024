import { useEffect, useState } from 'react';
import * as gamesAPI from '../../api/games-api';
import GameCatalogItem from './game-catalog-item/GameCatalogItem';

export default function GameCatalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesAPI.getAll()
            .then(result => setGames(result));
    }, []);

    return (
        /* <!-- Catalogue --> */
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0 ? games.map(game => <GameCatalogItem key={game._id} {...game} />) : <h3 className="no-articles">No games yet</h3>}
        </section>
    );
}