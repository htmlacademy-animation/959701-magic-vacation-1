const observeClassAddition = (targetNode, className, callback) => {
  const config = {attributes: true, attributeFilter: [`class`]};

  const observerCallback = function (mutationsList) {
    for (const mutation of mutationsList) {
      if (
        mutation.attributeName === `class` &&
        mutation.target.classList.contains(className)
      ) {
        callback();
      }
    }
  };

  const observer = new MutationObserver(observerCallback);

  observer.observe(targetNode, config);

  return observer;
};

export {observeClassAddition};
