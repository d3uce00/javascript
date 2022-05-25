const URL_Ghost_rider = "https://omdbapi.com/?apikey=fb7170de&s=ghost_rider";

export const listGhost = () => {
    fetch(URL_Ghost_rider)
    .then((response) => response.json())
    .then((results) => {
        const movies = results.Search;
        console.log(movies);
    });
};

const URL_The_Punisher = "https://omdbapi.com/?apikey=fb7170de&s=the_punisher&type=series";

export const listPunisher = () => {
    fetch(URL_The_Punisher)
    .then((responseP) => responseP.json())
    .then((resultsP) => {
        const series = resultsP.Search;
        console.log(series);
    });
};