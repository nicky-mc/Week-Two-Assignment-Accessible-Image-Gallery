function pictureEnlargement(imgs) {
  let expandImg = document.getElementById("expandedImg");

  let imgText = document.getElementById("imgtext");

  expandImg.src = imgs.src;

  imgText.innerHTML = imgs.alt;

  expandImg.parentElement.style.display = "block";
}
let currentImageIndex = 0;

let images = [
  {
    image: `assets/berlinarty.jpeg`,
    thumbnail: `assets/berlinarty.jpeg`,
    alt: `Two people making faces at each other as a U-Bahn train runs past behind them`,
  },
  {
    image: `assets/july4th.jpeg`,
    thumbnail: `assets/july4th.jpeg`,
    alt: `pre voting burritos my wife on the left me on the right`,
  },
  {
    image: `assets/me.jpeg`,
    thumbnail: `assets/me.jpeg`,
    alt: `just me`,
  },
  {
    image: `assets/me7.jpeg`,
    thumbnail: `assets/me7.jpeg`,
    alt: `me posing as per`,
  },
  {
    image: `assets/me2years ago.jpeg`,
    thumbnail: `assets/me2years ago.jpeg`,
    alt: `me 2 years ago serriously`,
  },
  {
    image: `assets/wedding.jpeg`,
    thumbnail: `assets/wedding.jpeg`,
    alt: `my Wedding day`,
  },
  {
    image: `assets/5B2AD1F4-EF5B-4268-93C6-2D60E847D1D4.jpg`,
    thumbnail: `assets/5B2AD1F4-EF5B-4268-93C6-2D60E847D1D4.jpg`,
    alt: `my Wife Charlotte posing by 'her' check point`,
  },
];

function updateDisplayImage(image) {
  let displayElem = document.getElementById("expandedImg");
  displayElem.src = image.image;
  displayElem.alt = image.alt;
  document.getElementById("imgtext").textContent = image.alt;
}

function pictureEnlargement(imgs) {
  let expandImg = document.getElementById("expandedImg");
  let imgText = document.getElementById("imgtext");

  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

document.getElementById("next").addEventListener("click", function () {
  selectNextImage(1);
});
document.getElementById("prev").addEventListener("click", function () {
  selectNextImage(-1);
});

function selectNextImage(index) {
  currentImageIndex += index;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  updateDisplayImage(images[currentImageIndex]);
}

window.onload = function () {
  updateDisplayImage(images[currentImageIndex]);
};
