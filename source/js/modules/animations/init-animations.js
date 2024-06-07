const initAnimations = () => {
  const header = document.querySelector(`header`);
  const footer = document.querySelector(`.js-footer`);
  document.addEventListener(`DOMContentLoaded`, function () {
    document.body.classList.add(`is-active`);
    header.classList.add(`is-active`);
    footer.classList.add(`is-active`);
  });
};

export {initAnimations};
