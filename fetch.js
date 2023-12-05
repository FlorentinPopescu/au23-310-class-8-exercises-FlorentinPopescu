// ./fetch.js

// !!! UNDER WORK !!!

/* --------------------------------------------- */
// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const API_KEY = "eh7c80hvSfet5CLcSYeZRrSGLzq4AWYX";

const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';
//const BOOKS_URL = "https://api.nytimes.com/svc/books/v3/lists/{2022-03-12}/{hardcover-fiction}.json";

/* --------------------------------------------- */
const url = `${BOOKS_URL}?api-key=${API_KEY}`;

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  });
