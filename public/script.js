window.onload = function () {
  document.addEventListener("click", documentActions);
  function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.classList.contains("search-form__icon")) {
      document.querySelector(".search-form").classList.toggle("_active");
    } // Меню поиска
  }

  // Header
  let headerElement = document.querySelector(".header");
  const callback = function (entries, observe) {
    if (entries[0].isIntersecting) {
      headerElement.classList.remove("_scroll");
    } else {
      headerElement.classList.add("_scroll");
    }
  };
  const headerObserve = new IntersectionObserver(callback);
  headerObserve.observe(headerElement);
};
