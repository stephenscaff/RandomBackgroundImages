/**
 * Random Backgorund Images
 * Sets a random background image from an
 * array of paths, set to a data attribute.
 *
 * @example <figure
 *           class='js-rando-bg'
 *           data-images = '["http://yoimage.com/image-1.jpg", "http://yoimage.com/image-2.jpg", "http://yoimage.com/image-3.jpg"]'
 *           style = 'background-image:url(placeholder.jpg)'></figure>
 */
const RandoBgs = (() => {

 // Element holding backgound image style
 // and array as of images as data attribute.
 const randomBgs = document.querySelectorAll('.js-rando-bg');

 return{

    init() {
      if (!randomBgs.length > 0) return;
      this.bindEvents()
    },

    bindEvents() {
      RandoBgs.getImages();
    },

    /**
     * Get Images
     * Gets images array from data-attribute and parses as JSON.
     */
    getImages() {
      Util.forEach ( randomBgs, function (index, randomBg) {
        let images = JSON.parse(randomBg.dataset.images);
        randomImage = RandoBgs.getRandomImage(images);

        RandoBgs.setImage(randomBg, randomImage);
      });
    },

    /**
     * Get Random Image
     * Gets a random images from provided array.
     * @return {string} the image path
     */
    getRandomImage(imageArr) {
      let randomize = Math.floor(Math.random()*imageArr.length);
      let selectedImage = imageArr[randomize];
      return selectedImage;
    },

    /**
     * Set Image
     * Sets our image path as a background image.
     */
    setImage(el, image) {
      el.style.backgroundImage = 'url('+image+')';
    }
  };
})();

// Export
export default RandoBgs;
