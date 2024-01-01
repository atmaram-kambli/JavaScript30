function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


const slideInImages = document.querySelectorAll('.slide-in');

function handleSlideIn() {
    slideInImages.forEach((slideInImage) => {
        // image halfway
        const imageHalfWay = (window.scrollY + window.innerWidth) - (slideInImage.height/2);
        // bottom of the image
        const imageBottom = slideInImage.offsetTop + slideInImage.height;

        const isPassImageHalf = imageHalfWay > slideInImage.offsetTop;
        const isNotPassImageBottom = window.scrollY < imageBottom;

        if(isPassImageHalf && isNotPassImageBottom) {
            slideInImage.classList.add('active');
        }else {
            slideInImage.classList.remove('active');
        }
    })

}

window.addEventListener('scroll', debounce(handleSlideIn));
// window.addEventListener('scroll', handleSlideIn);
