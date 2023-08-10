import { createElement } from '../render.js';

function addNewPoint() {
  return `
  <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled>New event</button>`;
}

export default class NewPoint {
  getTemplate() {
    return addNewPoint();
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
