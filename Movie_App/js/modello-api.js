import {BASE_URL} from "./config.js"

export const apilist = async (s, type) => {
  const url = BASE_URL + `s=${s}&type=${type}`;
  const responce = await fetch(url);
  const result = await responce.json();
  const items = result.Search;
  viewItems(items);
};



/*const viewItems = (items) =>{
    items.map((item) =>{
        console.group();
        console.log(item.Title);
        console.log(item.Year);
        console.log(item.Type);
        console.log(item.Poster);
        console.groupEnd();
    });
}
*/
    const viewItems = (items) => {
      let indice = 1;
    //Ciclare l'array
    items.map((item) => {
      //Creo il movie all'interno del DOM

      createHTMLMovie(item, indice);
      indice++;
    });
  };
  
    const createHTMLMovie = (movie, i) => {
      const div = document.getElementById(`film${i}`);
      const img = document.getElementById(`film-img-${i}`);
      const anno = document.getElementById(`film-anno-${i}`);
      const title = document.getElementById(`film-titolo-${i}`);

      const h3 = document.createElement("h3");
      const node = document.createTextNode(movie.Title);
      h3.appendChild(node);

      const para = document.createElement("p");
      const node2 = document.createTextNode(movie.Year);
      para.appendChild(node2);

     
      div.replaceChild(para, anno);
      div.replaceChild(h3,title);

      img.src = `${movie.Poster}`;
  
    };



    export const apilistSerie = async (s, type) => {
      const url = BASE_URL + `s=${s}&type=${type}`;
      const responce = await fetch(url);
      const result = await responce.json();
      const items = result.Search;
      viewItemsSerie(items);
    };

    const viewItemsSerie = (items) => {
      let indice = 1;
    //Ciclare l'array
    items.map((item) => {
      //Creo il movie all'interno del DOM
      createHTMLSerie(item, indice);
      indice++;
    });
  };

    const createHTMLSerie = (serie, i) => {
      const div = document.getElementById(`serie${i}`);
      const img = document.getElementById(`serie-img-${i}`);
      const anno = document.getElementById(`serie-anno-${i}`);
      const titolo = document.getElementById(`serie-titolo-${i}`);

      const h3 = document.createElement("h3");
      const node = document.createTextNode(serie.Title);
      h3.appendChild(node);
      div.replaceChild(h3, titolo);
        
      const para = document.createElement("p");
      const node2 = document.createTextNode(serie.Year);
      para.appendChild(node2);
      div.replaceChild(para, anno);

      img.src = `${serie.Poster}`;
  
    };



    export const apilistGiochi = async (s, type) => {
      const url = BASE_URL + `s=${s}&type=${type}`;
      const responce = await fetch(url);
      const result = await responce.json();
      const items = result.Search;
      viewItemsGiochi(items);
    };

    const viewItemsGiochi = (items) => {
      let indice = 1;
    //Ciclare l'array
    items.map((item) => {
      //Creo il movie all'interno del DOM
      createHTMLGiochi(item, indice);
      indice++;
    });
  };

    const createHTMLGiochi = (game, i) => {
      const div = document.getElementById(`game${i}`);
      const img = document.getElementById(`game-img-${i}`);
      const anno = document.getElementById(`game-anno-${i}`);
      const titolo = document.getElementById(`game-titolo-${i}`);

      const h3 = document.createElement("h3");
      const node = document.createTextNode(game.Title);
      h3.appendChild(node);
      div.replaceChild(h3, titolo);
        
      const para = document.createElement("p");
      const node2 = document.createTextNode(game.Year);
      para.appendChild(node2);
      div.replaceChild(para, anno);
      let Poster = game.Poster



      if (Poster == "N/A" || Poster =="https://ia.media-imdb.com/images/M/MV5BZTM5NTQzMWQtNTI2MS00NzJjLWIyOGMtNjlhM2VjZjE2NDdiXkEyXkFqcGdeQXVyODI5Mzc1NjY@._V1_SX300.jpg"){
        Poster = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
      }
      
      img.src = `${Poster}`;
  
    };