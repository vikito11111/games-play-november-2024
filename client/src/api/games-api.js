import * as request from './requester';

const GAMES_BASE_URL = 'http://localhost:3030/jsonstore/games';

export function getAll() {
    return request.get(GAMES_BASE_URL);
};