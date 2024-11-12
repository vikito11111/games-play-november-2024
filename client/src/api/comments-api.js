import requester from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/games';

function buildUrl(gameId) {
    return `${BASE_URL}/${gameId}/comments`;
};

async function create(gameId, username, text) {
    return await requester.post(buildUrl(gameId), {
        username,
        text,
    });
};

async function getAll(gameId) {
    const result = await requester.get(buildUrl(gameId));

    const comments = Object.values(result);

    return comments;
}

const commentsAPI = {
    create,
    getAll,
}

export default commentsAPI;