import {BASE_URL} from "./config.js";

export const apilist = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
    .then((response) => response.json())
    .then((results) => {
        const items = results.Search;
        console.log(items);
    });
};