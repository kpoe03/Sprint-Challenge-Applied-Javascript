// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        BootstrapArray = response.data.articles.bootstrap;
        JavaScriptArray = response.data.articles.javascript;
        JQueryArray = response.data.articles.jquery;
        NodeArray = response.data.articles.node;
        TechnologyArray = response.data.articles.technology;

        BootstrapArray.forEach((k) => cardsContainer.appendChild(cardCreator(k)));
        JavaScriptArray.forEach((k) => cardsContainer.appendChild(cardCreator(k)));
        JQueryArray.forEach((k) => cardsContainer.appendChild(cardCreator(k)));
        NodeArray.forEach((k) => cardsContainer.appendChild(cardCreator(k)));
        TechnologyArray.forEach((k) => cardsContainer.appendChild(cardCreator(k)));
        
    })
    .catch((error) => {
        console.log("It's not here", error);
    })


    function cardCreator(articles) {
        let card = document.createElement('div');
        card.classList.add('card');


        let headline = document.createElement('div')
        headline.classList.add('headline');
        
        headline.textContent = articles.headline;
        card.appendChild(headline);

        let author = document.createElement('div');
        author.classList.add('author');
        card.appendChild(author);

        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        

        let image = document.createElement('img');
        image.src = articles.authorPhoto;

        let AuthorName = document.createElement('span');
        AuthorName.textContent = articles.authorName;

        author.appendChild(imgContainer);
        imgContainer.appendChild(image);
        
        
        author.appendChild(AuthorName);

        image.textContent = articles.image;
        AuthorName.textContent = articles.authorName;
        

        return card;
    }