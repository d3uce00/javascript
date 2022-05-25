const URL_Ghost_rider = "https://omdbapi.com/?apikey=fb7170de&s=ghost_rider";

export const listGhost = () => {
    fetch(URL_Ghost_rider)
    .then((response) => response.json())
    .then((results) => {
        const movies = results.Search;
        console.log(movies);
    });
};