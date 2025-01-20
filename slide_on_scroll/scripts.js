function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const sliderImages = document.querySelectorAll(".slide-in");
// console.log(offsetTop);

function checkSlide() {
  // console.count(e);
  sliderImages.forEach((sliderImage) => {
    //halfway through the image
    // console.log(innerHeight)
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    // console.log("this is Slide in At: " + slideInAt);

    //bottom of the image
    // OffsetTop = top of the image is how far from the top of the window
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // console.log("this is Image Bottom: " + imageBottom);
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    // console.log(isHalfShown)
    const isNotScrolledPast = window.scrollY < imageBottom;
    // console.log(isNotScrolledPast)

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
