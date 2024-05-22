export default () => {
  let socialBlock = document.querySelector(`.js-social-block`);
  const links = socialBlock.querySelectorAll(`li`);

  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
    links.forEach((link, index) => {
      link.style.transitionDelay = `0.${index}s`;
    });
  });
  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);
    links.forEach((link) => {
      link.style.transitionDelay = `0s`;
    });
  });
};
