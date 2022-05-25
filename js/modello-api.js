import {BASE_URL} from "./config.js";

export const apilist = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
    .then((response) => response.json())
    .then((results) => {
        const items = results.Search;
        console.log(items);
        viewItems(items);
    });
};

const viewItems = (items) =>{
    items.map((item) =>{
        console.group();
        console.log(item.Title);
        console.log(item.Year);
        console.log(item.Type);
        console.log(item.Poster);
        console.groupEnd();
    });
}