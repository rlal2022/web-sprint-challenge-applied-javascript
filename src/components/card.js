import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const divWrapper = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  const span = document.createElement("span");

  divWrapper.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imageDiv.classList.add("img-container");

  divWrapper.appendChild(headlineDiv);
  divWrapper.appendChild(authorDiv);
  authorDiv.appendChild(imageDiv);
  authorDiv.appendChild(span);
  imageDiv.appendChild(image);

  headlineDiv.textContent = article.headline;
  span.textContent = `By ${article.authorName}`;
  image.src = article.authorPhoto;

  divWrapper.addEventListener("click", (e) => {
    console.log(article.headline);
  });
  return divWrapper;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios
    .get("http://localhost:5001/api/articles")
    .then((resp) => {
      const articleData = Object.values(resp.data.articles);
      articleData.forEach((data) => {
        data.forEach((article) => {
          const element = document.querySelector(selector);
          element.appendChild(Card(article));
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export { Card, cardAppender };
