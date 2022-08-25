let elMenuBtn = document.querySelector(".menu-btn");
let elModal = document.querySelector(".nav");
let elLinethird = document.querySelector(".line2");
let elLineOne = document.querySelector(".line1");
let elLineThree = document.querySelector(".line3");

elMenuBtn.addEventListener("click", function () {
  elModal.classList.toggle("grow-height");
  elLinethird.classList.toggle("remove-line");
  elLineOne.classList.toggle("rotate-line1");
  elLineThree.classList.toggle("rotate-line3");
});

window.addEventListener('scroll', () => {
  header = document.querySelector("header");
  header.classList.toggle("header-bg",window.scrollY > 200);
})

const links = document.querySelectorAll(".nav__item");
const sections = document.querySelectorAll("section");
function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 71.5 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("nav__link--active"));
  links[index].classList.add("nav__link--active");
}

for(let i of links) {
  i.addEventListener('click', () => {
    elModal.classList.remove('grow-height');
    elLinethird.classList.remove("remove-line");
    elLineOne.classList.remove("rotate-line1");
    elLineThree.classList.remove("rotate-line3");
  })
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

var typed = new Typed(".name", {
  strings: ["Abdusamad", "Coder", "AbuDev", "Creative"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});

const skills = document.querySelector('.about__texts__list');
for(let i of data.skills) {
  skills.innerHTML += `<li class="about__skill">${i}</li>`
}

const offers = document.querySelector('.my-offer__list');
for(let i of data.offers) {
  offers.innerHTML += `
<li class="my-offer__item col-md-3 col-sm-6 col-xs-12 offer-box">
  <div class="offer-block">
    <div class="bottom-border"></div>
    <img class="offer-block__img" src="${i.img}" alt="img">
    <h4 class="offer-box__title">${i.title}</h4>
    <p class="offer-box__desc">${i.desc}</p>
  </div>
</li>`
}

const awards = document.querySelector('.services__list');
for(let i of data.awards) {
  awards.innerHTML += `
  <li class="services__item projects col-md-3 col-sm-6 col-xs-12">
    <i class="${i.icon} services__item--before"></i>
    <span class="projects__count">${i.count}</span>
    <p class="projects__desc">${i.desc}</p>
  </li>
  `
}

const defTab = data.allproducts;
const tab1 = document.querySelector('.portfolio__menu-item1');
const tab2 = document.querySelector('.portfolio__menu-item2');
const tab3 = document.querySelector('.portfolio__menu-item3');
const tab4 = document.querySelector('.portfolio__menu-item4');
tab1.addEventListener('click', () => {
  setProduct(defTab);
  tab1.classList.add('portfolio__menu-item--active');
  tab2.classList.remove('portfolio__menu-item--active');
  tab3.classList.remove('portfolio__menu-item--active');
  tab4.classList.remove('portfolio__menu-item--active');
});
tab2.addEventListener('click', () => {
  setProduct(data.react);
  tab2.classList.add('portfolio__menu-item--active');
  tab1.classList.remove('portfolio__menu-item--active');
  tab3.classList.remove('portfolio__menu-item--active');
  tab4.classList.remove('portfolio__menu-item--active');
});
tab3.addEventListener('click', () => {
  setProduct(data.html);
  tab3.classList.add('portfolio__menu-item--active');
  tab1.classList.remove('portfolio__menu-item--active');
  tab2.classList.remove('portfolio__menu-item--active');
  tab4.classList.remove('portfolio__menu-item--active');
});
tab4.addEventListener('click', () => {
  setProduct(data.vue);
  tab4.classList.add('portfolio__menu-item--active');
  tab1.classList.remove('portfolio__menu-item--active');
  tab2.classList.remove('portfolio__menu-item--active');
  tab3.classList.remove('portfolio__menu-item--active');
});

const products = document.querySelector('.portfolio__list');
const setProduct = (product) => {
  products.innerHTML = '';
  for(let i of product.slice(0, 8)) {
    products.innerHTML += `
    <li class="portfolio__item">
      <div class="portfolio__links">
        <a href="${i.github}"
          target="_blank"
          ><i class="bx bxl-github"></i></a
        ><a
          href="${i.link}"
          class="netlify__link"
          target="_blank"
          ><i class="bx bx-globe"></i
        ></a>
      </div>
      <h3 class="portfolio__name">${i.title}</h3>
      <img class="portfolio__img" src="${i.img}" alt="${i.title}" />
    </li>
    `
  }
}
setProduct(defTab);


