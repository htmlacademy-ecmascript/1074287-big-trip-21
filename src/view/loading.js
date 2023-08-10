import { createElement } from '../render.js';

function loadingData() {
  return `
  <p class="trip-events__msg">Loading...</p>`;
}

export default class Loading {
  getTemplate() {
    return loadingData();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
