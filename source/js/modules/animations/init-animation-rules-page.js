import {observeClassAddition} from "../utils/observeClassAddition";

const initAnimationRulesPage = () => {
  const lists = document.querySelectorAll(`[data-animation="list"]`);
  const rulesPage = document.getElementById(`rules`);
  const btn = rulesPage.querySelector(`.rules__link`);
  if (!lists.length || !rulesPage) {
    return;
  }

  const animationCallback = () => {
    const delay = 200;
    lists.forEach((list) => {
      const items = Array.from(list.children);
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add(`is-active`);
        }, delay * (index + 1));
      });
    });

    setTimeout(() => {
      btn.style.opacity = `1`;

      setTimeout(() => {
        btn.querySelector(`.rules__link-text`).style.maxWidth = `1000px`;
        btn.querySelector(`.rules__link-text`).style.opacity = `1`;
      }, 100);
    }, lists.length * delay + 1000);
    btn.style.opacity = `1`;
  };

  observeClassAddition(rulesPage, `active`, animationCallback);
};

export {initAnimationRulesPage};
