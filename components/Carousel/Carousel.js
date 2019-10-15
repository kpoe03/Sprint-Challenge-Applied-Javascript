/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let carouselPics = document.querySelector('.carousel-container')

function slideShow() {
  let carousel = document.createElement('div');
  carousel.classList.add('carousel');
  
  let leftBtn = document.createElement('div');
  leftBtn.classList.add('left-button');
  leftBtn.innerText = '<';
  carousel.appendChild(leftBtn);

  let mountains = document.createElement('img');
  mountains.src = "./assets/carousel/mountains.jpeg";
  carousel.appendChild(mountains);

  let computer = document.createElement('img');
  computer.src = "./assets/carousel/computer.jpeg";
  carousel.appendChild(computer);

  let trees = document.createElement('img');
  trees.src = "./assets/carousel/trees.jpeg";
  carousel.appendChild(trees);

  let turntable = document.createElement('img');
  turntable.src = "./assets/carousel/turntable.jpeg";
  carousel.appendChild(turntable);
  

  let rightBtn = document.createElement('div');
  rightBtn.classList.add('right-button');
  rightBtn.innerText = '>';
  carousel.appendChild(rightBtn);

  let imgChange = [leftBtn, mountains, computer, trees, turntable, rightBtn]
  imgChange.forEach(imgChange => {
    carousel.appendChild(imgChange)
  })

  let counter = 0;
  let images = [
    mountains,
    computer,
    trees,
    turntable
  ]

  rightBtn.addEventListener('click', () => {
    if (counter < 3) {
      counter++
      images[counter -1 ].style.display = 'none';
      images[counter].style.display = 'block';
    } else {
      counter = 0;
      images[counter + 3].style.display = 'none';
      images[counter].style.display = 'block';
    }
  })

  leftBtn.addEventListener('click', () => {
    if (counter > 0) {
      counter--
      images[counter + 1].style.display = 'none';
      images[counter].style.display = 'block';
    } else {
      counter = 3;
      images[counter - 3].style.display = 'none';
      images[counter].style.display = 'block';
    }
  })

  console.log(carousel)
  return carousel;
}

carouselPics.appendChild(slideShow());