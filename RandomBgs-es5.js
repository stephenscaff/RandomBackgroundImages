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
var RandoBgs = (function() {

 // Element holding backgound image style
 // and array as of images as data attribute.
 var randomBgs = document.querySelectorAll('.js-rando-bg');

 return{

    init: function() {
      if (!randomBgs.length > 0) return;
      this.bindEvents()
    },

    bindEvents: function() {
      RandoBgs.getImages();
    },

    /**
     * Get Images
     * Gets images array from data-attribute and parses as JSON.
     */
    getImages: function() {
      Util.forEach ( randomBgs, function (index, randomBg) {
        var images = JSON.parse(randomBg.dataset.images);
        randomImage = RandoBgs.getRandomImage(images);

        RandoBgs.setImage(randomBg, randomImage);
      });
    },

    /**
     * Get Random Image
     * Gets a random images from provided array.
     * @return {string} the image path
     */
    getRandomImage: function(imageArr) {
     var randomize = Math.floor(Math.random()*imageArr.length);
     var selectedImage = imageArr[randomize];
     return selectedImage;
    },

    /**
     * Set Image
     * Sets our image path as a background image.
     */
    setImage: function(el, image) {
      el.style.backgroundImage = 'url('+image+')';
    }
  };
})();
