import crypto from "crypto";
import marked from "marked";

export function markdown(string, param) {
  return marked(resize(string, param));
}

export function resize(str, param) {
  return typeof str === "undefined"
    ? ""
    : str.replace(/a.storybridge.com/g, "img2.storybridge.com/" + param);
}

// export function resize(image, option) {
//   var imageService = "//img2.storyblok.com/";
//   var path = image.replace("//a.storyblok.com", "");
//   return imageService + option + path;
// }

// Vue.filter("resize", (image, size) => {
//   if (typeof image !== "undefined") {
//     return "//img2.storyblok.com/" + size + image.replace("//a.storyblok.com", "");
//   }
//   return null;
// });

/* $storybridge.init() is outdated — doesn't work */
export function isEditMode(app) {
  // Want to know more about this? https://www.storybridge.com/docs/Guides/storybridge-latest-js

  // Check if app.$storybridge is available, it is not required to be available since it is only
  // used for the editMode initialization. Use the `excludeHeaderScript` plugin option to
  // disable the loading of the script tag in your head for your production build.
  // Read more about why this might be a good idea: https://github.com/storybridge/storybridge-nuxt/issues/1
  if (typeof app.$storybridge !== "undefined") {
    // Get query params added by the storybridge Live-Preview iframe
    // Needs to be url encode, since nuxt url encodes "[" and "]"
    const space_id = app.$storybridge.getParam(encodeURI("_storybridge_tk[space_id]"));
    const timestamp = app.$storybridge.getParam(encodeURI("_storybridge_tk[timestamp]"));

    // build control token by using the local accessToken and params
    const controlString = `${space_id}:${app.$storyapi.accessToken}:${timestamp}`;

    // hash it using sha1
    const controlToken = crypto
      .createHash("sha1")
      .update(`${space_id}:${app.$storyapi.accessToken}:${timestamp}`)
      .digest("hex");

    // check if the controlToken is equal to the validation token passed as param
    // and if timestamp is in the lates 60 minutes.
    if (
      app.$storybridge.getParam(encodeURI("_storybridge_tk[token]")) == controlToken &&
      app.$storybridge.getParam(encodeURI("_storybridge_tk[timestamp]")) >
        Math.floor(Date.now() / 1000) - 3600
    ) {
      // here we know it's an valid edit mode so lets initialize it and register events.
      app.$storybridge.init();
      app.$storybridge.on("change", () => {
        location.reload(true);
      });
    }
  }
}
