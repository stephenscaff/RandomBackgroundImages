# Random Background Images

Just a simple little element to deliver random background image on load from a client side array (via data attribute).
Turns out, data attributes can house arrays, so that's cool.

## Usage

- Include in your project
- Add an element to house the background image with the class `js-rando-bg`
- Add a data attribute to houses the array of images `data-images = '["http://yoimage.com/image-1.jpg", "http://yoimage.com/image-2.jpg", "http://yoimage.com/image-3.jpg"]'`
- Add a fallback image if you see fit `style="background-image:url(fallback.jpg);`

## Example Markup
```
<figure
   class="js-rando-bg"
   data-images = '["http://yomom.com/image-1.jpg", "http://yomom.com/image-2.jpg", "http://yomom.com/image-3.jpg"]'
   style="background-image:url(yo-fallback.jpg);">
</figure>
```

## Init
```
RandoBgs.init();

// Or, something like
import RandoBgs from './components/_RandoBgs.js'
RandoBgs.init();
```
