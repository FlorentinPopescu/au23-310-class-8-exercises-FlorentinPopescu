// ./fetch.js

/* --------------------------------------------- */
// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const API_KEY = "eh7c80hvSfet5CLcSYeZRrSGLzq4AWYX";

//const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';
const BOOKS_URL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";

/* --------------------------------------------- */
const url = `${BOOKS_URL}?api-key=${API_KEY}`;

fetch(url)
    .then(function (data) {
        return data.json();
    })
    .then(function (responseJson) {
        let articles = responseJson.results;

        let first5 = articles.slice(0, 5);
        console.log(first5);

        first5.forEach(article => {
            let content = document.getElementById("container");

            let articleTitle = article.title;
            let titleParagraph = document.createElement('h3');
            titleParagraph.style.backgroundColor = 'yellow';
            titleParagraph.style.color = 'red';
            let titleNode = document.createTextNode(`Title: ${articleTitle}`);
            titleParagraph.appendChild(titleNode);
            content.appendChild(titleParagraph);

            let articleAuthor = article.author;
            let authorParagraph = document.createElement('h3');
            let authorNode = document.createTextNode(`Author: ${articleAuthor}`);
            authorParagraph.appendChild(authorNode);
            content.appendChild(authorParagraph);

            let articleDescription = article.description;
            let descriptionParagraph = document.createElement('h4');
            descriptionParagraph.style.fontStyle = "italic";
            let descriptionNode = document.createTextNode(`Description: ${articleDescription}`);
            descriptionParagraph.appendChild(descriptionNode);
            content.appendChild(descriptionParagraph);
        })
    });
