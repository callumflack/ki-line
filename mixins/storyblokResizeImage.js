/* FAIL */
export default resize(image, option) {
  var imageService = "//img2.storyblok.com/";
  var path = image.replace("//a.storyblok.com", "");
  return imageService + option + path;
}
