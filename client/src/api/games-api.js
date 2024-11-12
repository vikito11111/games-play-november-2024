import * as request from './requester';

const GAMES_BASE_URL = 'http://localhost:3030/jsonstore/games';

export async function getAll() {
    const result = await request.get(GAMES_BASE_URL);

    const games = Object.values(result);

    return games;
};

export function getOne(gameId) {
    return request.get(`${GAMES_BASE_URL}/${gameId}`);
}

const gamesAPI = {
    getAll,
    getOne,
};

export default gamesAPI;