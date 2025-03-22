import gallery from "./gallery.json";

export function getGallery() {
  return gallery.data;
}

export function getRandomGallery() {
  return gallery.data[Math.floor(Math.random() * gallery.data.length)];
}
